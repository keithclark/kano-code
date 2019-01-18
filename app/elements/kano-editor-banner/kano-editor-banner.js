import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/marked-element/marked-element.js';
import '@kano/kwc-icons/kwc-ui-icons.js';
import '@kano/kwc-button/kwc-button.js';
import '@kano/kwc-style/color.js';
import '../kano-circle-progress/kano-circle-progress.js';
import '../kano-glint-animation/kano-glint-animation.js';
import { I18nBehavior } from '../behaviors/kano-i18n-behavior.js';
import '../kano-icons/kc-ui.js';
import { AppElementRegistryBehavior } from '../behaviors/kano-app-element-registry-behavior.js';

Polymer({
    _template: html`
        <style>
            :host {
                position: relative;
                @apply --layout-horizontal;
                @apply --layout-start;
                padding: 16px;
                display: block;
            }
            .container {
                display: flex;
                flex-wrap: wrap;
            }
            .avatar {
                margin-bottom: 10px;
            }
            .content {
                @apply --layout-flex;
                @apply --layout-horizontal;
                height: 100%;
                box-sizing: border-box;
                font-family: var(--font-body);
                font-size: 16px;
                color: #414a51;
                margin-bottom: 10px;
                margin-right: 10px;
                min-width: 200px;
                display: inline-block;
            }
            .content .head {
                color: #888;
                margin-bottom: 5px;
            }
            .content .body {
                @apply --layout-flex;
            }
            :host([show-save-button]) .animations-pager {
                height: 50px;
                width: 50px;
                margin: 0 25px;
            }
            .text {
                @apply --layout-vertical;
                @apply --layout-flex;
            }
            .buttons {
                display: block;
                margin-left: 56px;
            }
            kano-glint-animation {
                margin: 0 20px 0 0;
            }
            .button {
                opacity: 0;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: none;
                outline: none;
                cursor: pointer;
                font-family: var(--font-body);
                text-transform: uppercase;
                overflow: hidden;
                white-space: nowrap;
                background-color: var(--color-chateau);
                box-sizing: border-box;
                color: white;
                font-size: 14px;
                font-weight: bold;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 7px 24px;
                margin: 0;
                transition: background 300ms;
            }
            .button:hover {
                background-color: #5B646B;
            }
            #banner-save-button {
                @apply --layout-horizontal;
                @apply --layout-center;
                margin: 0 10px 10px 0;
            }
            #banner-save-button iron-icon {
                --iron-icon-width: 24px;
                --iron-icon-height: 24px;
                opacity: 0.75;
                margin-right: 8px;
            }
            #banner-save-button:hover iron-icon {
                opacity: 0.85;
            }
            .markdown-html p {
                margin: 0px;
            }
            .markdown-html kano-blockly-block {
                line-height: 0px;
                vertical-align: middle;
                display: inline-block;
            }
            [hidden] {
                display: none !important;
            }
            .emoji {
                max-width: 18px;
                max-height: 18px;
                transform: translateY(4px);
            }
            .button paper-spinner-lite {
                --paper-spinner-color: white;
                --paper-spinner-stroke-width: 2px;

                width: 18px;
                height: 18px;
                display: block;
                margin: 0px 7px;
            }
            kwc-button.active paper-spinner-lite {
                display: none;
            }
            kwc-button.hidden {
                display: none;
            }
            .button.inactive {
                filter: grayscale(100%);
                cursor: wait;
            }
            kano-circle-progress {
                margin-right: 16px;
                height: 40px;
                width: 40px;
                --kano-circle-progress: {
                    stroke: #fec02d;
                };
                --kano-circle-progress-back: {
                    stroke: var(--color-porcelain);
                };
            }
            button, kano-glint-animation {
                @apply --layout-self-center;
            }
            .undo-redo button {
                border: none;
                outline: none;
                cursor: no-drop;
                padding: 3px 5px;
                transition: all 300ms;
                color: #d2d6d8;
            }
            .undo-redo iron-icon {
                --iron-icon-width: 30px;
                --iron-icon-height: 30px;
            }
            .undo-redo button.active {
                color: #9fa4a8;
                cursor: pointer;
            }
            .undo-redo button.active:hover {
                color: var(--color-orange, #ff2800);
            }
            .undo-redo {
                margin: auto;
            }
            #banner-button {
                height: 38px;
            }
            #banner-button-container {
                display: inline-block;
            }
        </style>
        <div class="container">
            <div class="avatar">
                <kano-circle-progress radius="40" stroke-width="7" value="[[progress]]"></kano-circle-progress>
            </div>
            <div class="content">
                <div class="text">
                    <div class="head" hidden\$="[[!head]]">
                        <marked-element markdown="[[head]]">
                            <div class="markdown-html" slot="markdown-html"></div>
                        </marked-element>
                    </div>
                    <div class="body">
                        <marked-element markdown="[[text]]">
                            <div class="markdown-html" slot="markdown-html"></div>
                        </marked-element>
                    </div>
                </div>
            </div>
        </div>
            <div class="buttons">
            <kwc-button id="banner-save-button" ghost variant="tertiary" icon-id="kwc-ui-icons:save" on-click="_saveTapped" hidden$="[[!showSaveButton]]">
                [[localize('SAVE', 'Save')]]
            </kwc-button>
            <div id="banner-button-container">
                <kwc-button id="banner-button" class\$="[[_computeButtonClass(buttonState)]]" on-tap="_buttonTapped" variant="primary">
                    [[buttonLabel]]
                </kwc-button>
            </div>
        </div>
`,

    is: 'kano-editor-banner',
    behaviors: [AppElementRegistryBehavior, I18nBehavior],

    properties: {
        head: {
            type: String,
            value: null,
        },
        text: {
            type: String,
            value: null,
        },
        imgSrc: {
            type: String,
            value: '/assets/avatar/judoka-face.svg',
        },
        imgPage: {
            type: String,
            value: 'judoka',
        },
        buttonLabel: {
            type: String,
            observer: '_onButtonLabelChanged',
        },
        buttonState: {
            type: String,
            value: null, /* values = { "active", "inactive", "hidden" || null } */
            observer: '_buttonStateChanged',
        },
        showSaveButton: {
            type: Boolean,
            value: false,
            reflectToAttribute: true,
            observer: '_showSaveButtonChanged',
        },
        progress: {
            type: Number,
            value: 0,
        },
        canGoBack: {
            type: Boolean,
        },
        canGoForward: {
            type: Boolean,
        },
    },
    attached() {
        this.animationSupported = 'animate' in HTMLElement.prototype;
        this._registerElement('banner-button', this.$['banner-button']);
    },
    _fadeInButton(id, duration) {
        this.$['banner-button'].setAttribute('data-animate', (duration + 150));
        // register element with updated 'data-animate' attribute
        this._registerElement(id, this.$[id]);
        if (this.animationSupported) {
            this.$[id].animate([{
                transform: 'scale(0)',
                opacity: '0',
            }, {
                transform: 'scale(1)',
                opacity: '1',
            },
            ], {
                duration,
                fill: 'forwards',
            }).onfinish = () => {
                this.$['banner-button'].removeAttribute('data-animate');
                this._registerElement(id, this.$[id]);
            };
        } else {
            this.$[id].style.opacity = 1;
            this.$[id].removeAttribute('data-animate');
            this._registerElement(id, this.$[id]);
        }
    },

    shakeButton() {
        this.$['banner-button-container'].animate([{
            offset: 0.0,
            transform: 'translate3d(0, 0, 0)',
        }, {
            offset: 0.1,
            transform: 'translate3d(-1px, 0, 0)',
        }, {
            offset: 0.2,
            transform: 'translate3d(2px, 0, 0)',
        }, {
            offset: 0.3,
            transform: 'translate3d(-3px, 0, 0)',
        }, {
            offset: 0.4,
            transform: 'translate3d(3px, 0, 0)',
        }, {
            offset: 0.5,
            transform: 'translate3d(-3px, 0, 0)',
        }, {
            offset: 0.6,
            transform: 'translate3d(3px, 0, 0)',
        }, {
            offset: 0.7,
            transform: 'translate3d(-3px, 0, 0)',
        }, {
            offset: 0.8,
            transform: 'translate3d(2px, 0, 0)',
        }, {
            offset: 0.9,
            transform: 'translate3d(-1px, 0, 0)',
        }, {
            offset: 1,
            transform: 'translate3d(0, 0, 0)',
        }, ], {
            duration: 1200,
            easing: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
            fill: 'both',
            iterations: 1,
        });
    },

    _buttonTapped() {
        if (this.buttonState !== 'inactive') {
            this.fire('button-tapped');
        }
    },

    _saveTapped() {
        this.fire('save-button-clicked');
    },

    _buttonStateChanged(value, oldValue) {
        if (value && !oldValue && !this.showSaveButton) {
            this._fadeInButton('banner-button', 200);
        }
    },

    _buttonHidden(state) {
        return !state || state === 'hidden';
    },

    _buttonActive(state) {
        return state === 'active';
    },

    _buttonInactive(state) {
        return state === 'inactive';
    },

    _computeButtonClass(state) {
        if (state) {
            return state;
        }

        return 'hidden';
    },

    _showSaveButtonChanged(value) {
        if (value) {
            this._fadeInButton('banner-save-button', 200);
            this._fadeInButton('banner-button', 400);
        }
    },

    _onButtonLabelChanged(label) {
        // FIXME this should consider localization
        this.toggleClass('green-cta', label === 'Next' || this.showSaveButton);
    },

    _computeGlint(label, buttonState) {
        // FIXME this should consider localization
        return buttonState !== 'inactive' &&
             (label === 'Next' || this.showSaveButton || label === 'Hints');
    },

    _undoRedoHidden(buttonState, showSaveButton) {
        return showSaveButton || buttonState !== 'hidden';
    },

    _undoTapped() {
        this.fire('undo');
    },

    _redoTapped() {
        this.fire('redo');
    },

    _computeUndoRedoClass(flag) {
        return flag ? 'active' : '';
    },
});
