import { IDisposable } from '@kano/common/index.js';
import { AddPartDialogProvider } from './dialogs/add.js';
import { PartContructor } from './manager.js';
import { memoize } from '../util/decorators.js';
import { IPartAPI } from './api.js';
import { IAPIDefinition } from '../meta-api/module.js';
import { Part } from './part.js';
import { TelemetryClient } from '@kano/telemetry/index.js';
import { DefaultInlineDisplay } from './inline-display.js';
import Editor from '../editor/editor.js';

interface IPartRecord {
    type : string;
    toolboxEntry : IDisposable;
    partsControlsEntry : IDisposable;
    part : Part;
}

export class EditorPartsManager {
    private editor : Editor;
    private addDialog : any;
    private addDialogProvider : AddPartDialogProvider;
    private apiRegistry : Map<string, IPartAPI> = new Map();
    private parts : Map<string, IPartRecord> = new Map();
    private names : Set<string> = new Set();
    private _telemetry : TelemetryClient = new TelemetryClient({ scope: 'parts' });
    constructor(editor : Editor) {
        this.editor = editor;
        this.editor.output.parts.managed = true;
        this.addDialogProvider = new AddPartDialogProvider();
    }
    // Assume this will not change during a session.
    // All parts must be defined initially.
    @memoize
    getRegisteredParts() {
        return this.editor.output.parts.getRegisteredParts();
    }
    onInject() {
        if (!this.editor.workspaceView) {
            return;
        }
        const { partsControls } = this.editor.workspaceView;
        if (!partsControls) {
            return;
        }
        this.addDialog = this.editor.dialogs.registerDialog(this.addDialogProvider);
        // Listen to clicks on the add parts button
        partsControls.onDidClickAddParts(() => {
            // Get all registered parts
            const parts = this.getRegisteredParts();
            // Gather displayable information about these parts
            const partInfos : IPartAPI[] = [];
            parts.forEach((p) => {
                const api = this.apiRegistry.get(p.type);
                if (!api) {
                    throw new Error(`Could not inject: Part '${p.type}' is missing its API`);
                }
                partInfos.push(api);
            });
            // Update the dialog and open it
            this.addDialogProvider.setParts(partInfos);
            this.addDialog.open();
        });
        partsControls.onDidClickRemovePart((id : string) => {
            this.removePartAttempt(id);
        });
        // Listen to the user clicking on an available part
        this.addDialogProvider.onDidClickPart((type) => {
            const parts = this.getRegisteredParts();
            const part = parts.get(type);

            if (!part) {
                throw new Error(`Could not add part: Part '${type}' was not registered`);
            }
            this.addPart(part);
            this.editor.restart();

            this.addDialog.close();
        });
    }
    createToolboxModule(api : IPartAPI, id : string, name : string) : IAPIDefinition {
        return {
            type: 'module',
            name: id,
            verbose: name,
            symbols: api.symbols,
            color: api.color,
            blockly: {
                prefix: `${name}:`,
            },
        };
    }
    reserveName(name : string) {
        this.names.add(name);
    }
    /**
     * Find a unique name available
     * @param source Original name
     */
    getAvailableName(source : string, inc = 1) : string {
        const newName = (inc >= 2) ? `${source} ${inc}` : source;
        if(this.names.has(newName)) {
            return this.getAvailableName(source, inc + 1);
        }
        this.reserveName(newName);
        return newName;
    }
    /**
     * Mark a name as free to use
     * @param source Name to free
     */
    freeName(source : string) {
        this.names.delete(source);
    }
    /**
     * Called by the editor when the user imports a saved app
     * @param app Exported app data
     */
    onImport(app : any) {
        // No part in this app, bail out
        if (!app.parts) {
            return;
        }
        const parts : any[] = app.parts;
        // Fetch all registered parts
        const registeredParts = this.getRegisteredParts();
        parts.forEach((partData : any) => {
            // Try to match the saved part with a known one
            const partClass = registeredParts.get(partData.type);
            // The part is not registered, warn developers and move on
            if (!partClass) {
                console.warn(`Could not import part: Part with type '${partData.type}' is not registered`, partData);
                return;
            }
            // Add the part. Provide the saved id and name, preventing them to be generated
            const record = this.addPart(partClass, partData);
            // If creating the part failed, bail out
            if (!record) {
                return;
            }
            // Hydrate the part with saved data
            record.part.load(partData);
        });
    }
    addPart(partClass : PartContructor, data? : any) {
        if (!this.editor || !this.editor.workspaceView) {
            return;
        }
        const api = this.apiRegistry.get(partClass.type);
        if (!api) {
            console.warn(`Could not add part: Part with type '${partClass.type}' is not registered`);
            return;
        }
        let name : string;
        if (!data || !data.name) {
            name = this.getAvailableName(api.label);
        } else {
            name = data.name;
            this.reserveName(data.name);
        }
        let id : string;
        if (!data || !data.id) {
            id = this.editor.output.runner.variables.getAvailable(name) as string;
        } else {
            id = data.id
            this.editor.output.runner.variables.reserve(name);
        }
        const part = this.editor.output.parts.addPart(partClass, { id, name });
        if (data) {
            part.load(data);
        }
        const toolboxModule = this.createToolboxModule(api, id, name);
        const entry = this.editor.toolbox.addEntry(toolboxModule);
        let inlineDisplay;
        if (api.inlineDisplay) {
            inlineDisplay = new api.inlineDisplay(part);
        } else {
            inlineDisplay = new DefaultInlineDisplay(part);
        }
        const partsControlsEntry = this.editor.workspaceView.partsControls.addEntry({ name, id, icon: api.icon, inlineDisplay, color: api.color });
        const partRecord : IPartRecord = {
            type: api.type,
            part,
            toolboxEntry: entry,
            partsControlsEntry,
        };
        this.parts.set(id, partRecord);
        if (api.onInstall) {
            api.onInstall(this.editor, part);
        }
        return partRecord;
    }
    removePartAttempt(id : string) {
        const partRecord = this.parts.get(id);
        if (!partRecord) {
            return;
        }
        if (this.checkBlockDependency(id)) {
            const alertDelete = this.editor.dialogs.registerAlert({
                heading: 'Oh oh',
                text: `You can't delete '${partRecord.part.name}' because it is used in the code`,
                buttonLabel: 'Ok',
            });
            alertDelete.on('close', () => {
                alertDelete.dispose();
                this._telemetry.trackEvent({ name: 'part_remove_dialog_closed' });
            });
            alertDelete.open();
        } else {
            const confirmDelete = this.editor.dialogs.registerConfirm({
                heading: 'Are you sure',
                text: `You are about to delete '${partRecord.part.name}'`,
            });
            confirmDelete.on('confirm', () => {
                this.removePart(id);
                confirmDelete.dispose();
                this._telemetry.trackEvent({ name: 'part_remove_dialog_closed' });
            });
            confirmDelete.open();
        }
        this._telemetry.trackEvent({ name: 'part_remove_dialog_opened' });
    }
    removePart(id : string) {
        const partRecord = this.parts.get(id);
        if (!partRecord) {
            return;
        }
        // Free the variable
        if (partRecord.part.id) {
            this.editor.output.runner.variables.free(partRecord.part.id);
        }
        if (partRecord.part.name) {
            this.freeName(partRecord.part.name);
        }
        // Remove the part from the output
        this.editor.output.parts.removePart(partRecord.part);
        // Remove the toolbox entry
        partRecord.toolboxEntry.dispose();
        partRecord.partsControlsEntry.dispose();
        this.parts.delete(id);
    }
    checkBlockDependency(id : string) {
        // Get the blockly xml and parse it
        const xmlString = this.editor.sourceEditor.getSource();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlString, 'text/xml');
        // Get all the 'block' elements
        const blocks = xml.getElementsByTagName('block');
        let block;
        let blockId;
        // Check for every one of them...
        for (let k = 0, len = blocks.length; k < len; k += 1) {
            block = blocks[k];
            blockId = block.getAttribute('type');
            if (blockId && blockId.startsWith(`${id}_`)) {
                return true;
            }
        }
        return false;
    }
    registerAPI(partAPI : IPartAPI) {
        this.apiRegistry.set(partAPI.type, partAPI);
    }
    reset() {
        this.parts.forEach((_, id) => {
            this.removePart(id);
        });
    }
    dispose() {
        this.apiRegistry.clear();
    }
}