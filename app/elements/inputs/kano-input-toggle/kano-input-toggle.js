import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@kano/kwc-style/color.js';
import { Input } from '../behaviors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/* globals Polymer, Kano */

Polymer({
  _template: html`
        <style>
            :host {
                display: block;
                cursor: pointer;
                --kano-input-toggle-width: 40px;
                --kano-input-toggle-height: 20px;
                --kano-input-toggle-button-size: 14px;
            }
            .toggle-container {
                position: relative;
                width: var(--kano-input-toggle-width);
                height: var(--kano-input-toggle-height);
                @apply --kano-input-toggle-container;
            }
            .toggle-bar {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--color-grey);
                border-radius: 30px;
                @apply --kano-input-toggle-bar;
            }
            .toggle-button {
                position: absolute;
                left: calc(var(--kano-input-toggle-height) / 2 - var(--kano-input-toggle-button-size) / 2);
                top: calc(var(--kano-input-toggle-height) / 2 - var(--kano-input-toggle-button-size) / 2);
                width: var(--kano-input-toggle-button-size);
                height: var(--kano-input-toggle-button-size);
                background: white;
                border-radius: 50%;
                transition: transform 120ms linear;
                @apply --kano-input-toggle-button;
            }
            :host([checked]) .toggle-button {
                transform: translate(calc(var(--kano-input-toggle-width) - (var(--kano-input-toggle-height) - var(--kano-input-toggle-button-size)) - var(--kano-input-toggle-button-size)), 0px);
                @apply --kano-input-toggle-button-checked;
            }
        </style>
        <div class="toggle-container" on-tap="_toggle">
            <div id="toggleBar" class="toggle-bar"></div>
            <div id="toggleButton" class="toggle-button"></div>
        </div>
`,

  is: 'kano-input-toggle',
  behaviors: [Input],

  observers: [
      'valueChanged(value)'
  ],

  properties: {
      checked: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          observer: '_checkedChanged',
          notify: true
      }
  },

  _checkedChanged () {
      this.value = this.checked;
  },

  valueChanged () {
      this.notifyPath('value', this.value);
  },

  _toggle () {
      this.checked = !this.checked;
  }
});