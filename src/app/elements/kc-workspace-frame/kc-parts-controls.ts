import { LitElement, html, customElement, property, css } from 'lit-element/lit-element.js';
import '@kano/styles/color.js';
import '@kano/styles/typography.js';
import { close } from '@kano/icons/ui.js';
import './kc-part-list-item.js';
import { EventEmitter, IDisposable, IEvent } from '@kano/common/index.js';
import { templateContent } from '../../lib/directives/template-content.js';
import { PartInlineDisplay } from '../../lib/parts/inline-display.js';
import { add } from './icons.js';
import { styleMap } from 'lit-html/directives/style-map';

export interface IStackEntry {
    id : string;
    name : string;
    icon : HTMLTemplateElement;
    inlineDisplay : PartInlineDisplay;
    color : string;
    entry? : any;
}

@customElement('kc-parts-controls')
export class KCPartsControls extends LitElement {
    private _onDidClickAddParts: EventEmitter = new EventEmitter();
    private _onDidClickRemovePart: EventEmitter<string> = new EventEmitter();
    @property({ type: Array })
    public parts : IStackEntry[] = [];
    public get onDidClickAddParts() {
        return this._onDidClickAddParts.event;
    }
    public get onDidClickRemovePart() {
        return this._onDidClickRemovePart.event;
    }
    static get styles() {
        return css`
            :host {
                display: block;
                font-family: var(--font-body);
            }
            .add-parts {
                display: flex;
                flex-direction: row;
                align-items: center;
                border-bottom: 1px solid #202428;
            }
            .add-parts label {
                margin: 0;
                cursor: pointer;
            }
            button#add-part-button {
                align-self: flex-end;
                background: rgba(255, 255, 255, 0.25);
                color: rgba(255, 255, 255, 0.75);
                border-radius: 3px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 8px 10px;
                font-size: 12px;
                cursor: pointer;
                width: 100%;
                margin-bottom: 10px;
                border: none;
                font-family: inherit;
            }
            button#add-part-button:hover {
                background: #fd6a21;
            }
            button#add-part-button:hover > label {
                color: white;
            }
            button#add-part-button > .icon {
                width: 20px;
                height: 20px;
                fill: white;
            }
            paper-dialog {
                background: transparent;
            }
            .part-list {
                flex: 1;
                flex-basis: 0.000000001px;
                display: flex;
                flex-direction: column;
                overflow: auto;
                padding-bottom: 40px;
            }
            .part {
                flex: none;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-bottom: 1px solid #202428;
                height: 40px;
                color: #fff;
            }
            .part.sortable-ghost {
                opacity: 0.3;
            }
            .part.sortable-drag {
                background-color: var(--kano-app-editor-workspace-background);
                box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.75);
            }
            kc-part-list-item {
                flex: 1;
                flex-basis: 0.000000001px;
                cursor: pointer;
                max-width: 100%;
            }
            .handle {
                cursor: move;
            }
            button.remove {
                background: inherit;
                cursor: pointer;
                line-height: 0;
                border: 0;
                width: 24px;
                height: 24px;
                padding: 6px;
                fill: #8F9195;
                outline: none;
            }
            .remove:hover {
                fill: var(--color-flamingo);
            }
            [hidden] {
                display: none !important;
            }
        `;
    }
    render() {
        return html`
        <div class="add-parts">
            <button id="add-part-button" type="button" @click=${this._addPartClicked}>
                <label for="add-part-button">Add Parts</label>
                <div class="icon">${templateContent(add)}</div>
            </button>
        </div>
        <div class="part-list">
            <slot name="extra-parts"></slot>
            ${this.parts.map(part => html`
            <div class="part" id="part-${part.id}">
                <kc-part-list-item .label=${part.name}
                                   .icon=${part.icon}
                                   .validator=${this._validatePartName.bind(this)}
                                   style=${styleMap({ '--kano-part-list-item-highlight-color': part.color })}
                                   @click=${()=> this._partItemTapped(part)}
                                   @change=${(e : CustomEvent) => this._onNameChange(e, part)}>
                    ${part.inlineDisplay.domNode}
                </kc-part-list-item>
                <button type="button" class="remove" @click=${()=> this._removePartClicked(part)}>
                    ${templateContent(close)}
                </button>
            </div>
            `)}
        </div>
`;
    }
    get addPartsButton() {
        return this.renderRoot!.querySelector('#add-part-button');
    }
    _addPartClicked() {
        this._onDidClickAddParts.fire();
    }
    _removePartClicked(part: any) {
        this._onDidClickRemovePart.fire(part.id);
    }
    _removePart(part: any) {
        this.dispatchEvent(new CustomEvent('remove-part', { detail: part }));
    }
    _partItemTapped(part: any) {
        this.dispatchEvent(new CustomEvent('part-clicked', { detail: part }));
    }
    getPartNode(id : string) {
        if (!this.renderRoot) {
            throw new Error('Could not get part DOM node: renderRoot was not set');
        }
        return this.renderRoot.querySelector(`#part-${id}`) as HTMLElement;
    }
    addEntry(model : IStackEntry) : IPartsControlsEntry {
        const item = model;
        const entry : IPartsControlsEntry = {
            _onDidChangeName: new EventEmitter<string>(),
            get onDidChangeName() { return this._onDidChangeName.event },
            dispose: () => {
                const index = this.parts.indexOf(item);
                this.parts.splice(index, 1);
                this.parts = [...this.parts];
            },
        };
        item.entry = entry;
        this.parts.push(item);
        this.parts = [...this.parts];
        return entry;
    }
    _onNameChange(e : CustomEvent, part : IStackEntry) {
        part.name = e.detail;
        part.entry!._onDidChangeName.fire(e.detail);
    }
    _validatePartName(oldName : string, newName : string) {
        const existing = this.parts.find(p => newName !== oldName && p.name === newName);
        if (existing) {
            return 'A part with that name already exist';
        }
        return true;
    }
}

interface IPartsControlsEntry {
    _onDidChangeName : EventEmitter<string>;
    onDidChangeName : IEvent<string>;
    dispose() : void;
}