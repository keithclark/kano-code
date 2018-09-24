import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { WorkspaceMixin } from '../behaviors/kano-workspace-behavior.js';

class KcWorkspaceDraw extends WorkspaceMixin(PolymerElement) {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
                width: 100%;
                height: 100%;
                background: var(--canvas-background, #ffffff);
            }
            .content ::slotted(*) {
                position: absolute;
                top: 0px;
                left: 0px
            }
        </style>
        <canvas id="canvas" width$="[[width]]" height$="[[height]]"></canvas>
        <div class="content">
            <slot name="part"></slot>
        </div>
`;
    }
    static get properties() {
        return {
            autoStart: Boolean,
            mousePositionX: {
                type: Number,
                value: 250,
                notify: true,
            },
            mousePositionY: {
                type: Number,
                value: 250,
                notify: true,
            },
            backgroundCache: {
                type: String,
            },
        };
    }
    get partsRoot() {
        return this;
    }
    constructor() {
        super();
        this.mousePositionX = 250;
        this.mousePositionY = 250;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.autoStart) {
            this.start();
        }
        this.ctx = this.$.canvas.getContext('2d');
        this.additionalMethods = {
            setBackgroundColor: this.setBackgroundColor.bind(this),
            setTransparency: this.setTransparency.bind(this),
            reset: this.reset.bind(this),
        };
    }
    onInstall() {}
    onCreationImport() {}
    onInject() {}
    /**
   * Apply background and store the value
   * to be reapplied when workspace is reset
   * (For imperative use - i.e user code will not call this)
   */
    setBackground(bg) {
        this.backgroundCache = bg;
        this.style.background = bg;
        let bgUrl = /^url\((['"]?)(.*)\1\)$/.exec(bg);
        let ctx;
        let img;
        bgUrl = bgUrl ? bgUrl[2] : '';
        if (bgUrl && bgUrl !== '') {
            ctx = this.$.canvas.getContext('2d');
            img = new Image();
            img.src = bgUrl;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, this.$.canvas.width, this.$.canvas.height);
            };
        }
    }
    /**
   * Method called by Canvas part (i.e. user code setting the background)
  */
    setBackgroundColor(color) {
        this.backgroundColorSet = true;
        this.style.backgroundColor = color;
    }
    getBackgroundColor() {
        return this.style.backgroundColor;
    }
    setTransparency(value) {
        const alpha = Math.min(Math.max(0, value), 100) / 100;
        this.ctx.globalAlpha = alpha;
    }
    getCanvas() {
        if (this.ctx) {
            return this.ctx;
        }
        return null;
    }
    getAdditionalMethods() {
        return this.additionalMethods || {};
    }
    start() {
        this.reset();
    }
    reset() {
        this.clear();
        this.ctx = this.$.canvas.getContext('2d');
        this.ctx.globalAlpha = 1;
    }
    clear() {
        this.backgroundColorSet = false;
        if (this.backgroundCache) {
            // To avoid a brief flash on the canvas, reset background only if Canvas part
            // would otherwise not set any value and there is effective change
            setTimeout(() => {
                if (!this.backgroundColorSet && this.style.background !== this.backgroundCache) {
                    this.setBackground(this.backgroundCache);
                }
            }, 50);
        }
    }
    renderOnCanvas(ctx, util, scaleFactor) {
        ctx.fillStyle = this.style.background || '#ffffff';
        ctx.fillRect(0, 0, this.$.canvas.width, this.$.canvas.height);
        ctx.drawImage(this.$.canvas, 0, 0);
        return Promise.resolve();
    }
}

customElements.define('kc-workspace-draw', KcWorkspaceDraw);