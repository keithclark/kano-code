import { Disposables, subscribe, subscribeDOM } from '@kano/common/index.js';
import { TelemetryClient } from '@kano/telemetry/index.js';
import { Plugin } from '../plugin.js';
import { IEditor } from '../../part/editor.js';

/**
 * Manages the actions in the toolbar avilable in the workspace
 */
export class WorkspaceToolbar extends Plugin {
    private subscriptions : Disposables;
    private _telemetry : TelemetryClient;
    private editor? : IEditor;
    private toolbar? : any;
    private resetDialog? : any;
    constructor() {
        super();
        this.subscriptions = new Disposables();
        this._telemetry = new TelemetryClient({ scope: 'workspace_toolbar' });
    }
    /**
     * @param {Editor} editor The editor this plugin is attached to
     */
    onInstall(editor : any) {
        /** @type {Editor} */
        this.editor = editor;
        this.editor!.telemetry.mount(this._telemetry);
    }
    onInject() {
        if (!this.editor) {
            return;
        }
        const workspaceView = this.editor.workspaceView;
        this.toolbar = workspaceView.toolbar;
        if (!this.toolbar) {
            return;
        }

        this.subscriptions.push(
            subscribe(this.editor.output, 'running-state-changed', this.updateRunningState.bind(this)),
            subscribe(this.editor.output, 'fullscreen-changed', this.updateFullscreen.bind(this)),
            subscribeDOM(this.toolbar, 'restart-clicked', this.restart.bind(this)),
            subscribeDOM(this.toolbar, 'run-clicked', this.toggleRun.bind(this)),
            subscribeDOM(this.toolbar, 'fullscreen-clicked', this.toggleFullscreen.bind(this)),
            subscribeDOM(this.toolbar, 'reset-clicked', this.reset.bind(this)),
            subscribeDOM(this.toolbar, 'export-clicked', this.export.bind(this)),
            subscribeDOM(this.toolbar, 'import-clicked', this.import.bind(this)),
        );
    }
    updateRunningState() {
        if (!this.toolbar || !this.editor) {
            return;
        }
        this.toolbar.running = this.editor.output.getRunningState();
    }
    updateFullscreen() {
        if (!this.toolbar || !this.editor) {
            return;
        }
        this.toolbar.fullscreen = this.editor.output.getFullscreen();
    }
    restart() {
        if (!this.editor) {
            return;
        }
        this.editor.output.restart();
        this._telemetry.trackEvent({ name: 'restart_clicked' });
    }
    toggleRun() {
        if (!this.editor) {
            return;
        }
        this.editor.output.toggleRunningState();
        this._telemetry.trackEvent({ name: 'run_clicked' });
    }
    toggleFullscreen() {
        if (!this.editor) {
            return;
        }
        this.editor.output.toggleFullscreen();
        this._telemetry.trackEvent({ name: 'fullscreen_clicked', properties: { value: this.editor.output.getFullscreen() } });
    }
    reset() {
        if (!this.editor) {
            return;
        }
        if (!this.resetDialog) {
            this.resetDialog = this.editor.dialogs.registerConfirm({
                heading: 'Reset',
                text: 'You\'ll lose any unsaved changes',
            });
            this.resetDialog.on('confirm', () => {
                if (!this.editor) {
                    return;
                }
                this.editor.reset();
            });
        }
        this.resetDialog.open();
        this._telemetry.trackEvent({ name: 'reset_clicked' });
    }
    export() {
        if (!this.editor) {
            return;
        }
        this.editor.exportToDisk();
        this._telemetry.trackEvent({ name: 'export_clicked' });
    }
    import() {
        if (!this.editor) {
            return;
        }
        this.editor.importFromDisk();
        this._telemetry.trackEvent({ name: 'import_clicked' });
    }
    addEntry(...args : any[]) {
        if (!this.toolbar) {
            return WorkspaceToolbar.createDisposableNoop();
        }
        return this.toolbar.addEntry(...args);
    }
    addSettingsEntry(...args : any[]) {
        if (!this.toolbar) {
            return WorkspaceToolbar.createDisposableNoop();
        }
        return this.toolbar.addSettingsEntry(...args);
    }
    static createDisposableNoop() {
        return {
            on() {},
            updateTitle() {},
            updateIcon() {},
            updateIronIcon() {},
            dispose() {},
        };
    }
    onDispose() {
        this.subscriptions.dispose();
    }
}


export default WorkspaceToolbar;
