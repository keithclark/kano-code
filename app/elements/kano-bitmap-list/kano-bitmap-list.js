/**
### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--kano-bitmaplist-action-container` | Mixin applied to the action controller | `{}`

@group Kano Elements
@hero hero.svg
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@kano/polymer-sortablejs/polymer-sortablejs.js';
import '@kano/x-carousel/x-carousel.js';
import '@kano/kwc-icons/kwc-icons.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { AppEditorBehavior } from '../behaviors/kano-app-editor-behavior.js';
import '../kano-bitmap-renderer/kano-bitmap-renderer.js';
import '../kano-alert/kano-alert.js';

Polymer({
  _template: html`
        <style>
            :host {
                display: block;
                position: relative;
            }
            .action-container {
                @apply --layout-horizontal;
                @apply --kano-bitmaplist-action-container;
            }
            #delete-slot {
                @apply --layout-flex-auto;
            }
            #frames {
                @apply --layout-horizontal;
                @apply --layout-center;
                height: 110px;
                position: relative;
                box-sizing: border-box;
                padding: 0;
            }
            .carousel-content {
                @apply --layout-horizontal;
                @apply --layout-center;
            }
            .sortable-item {
                @apply --layout-horizontal;
                @apply --layout-center;
                @apply --layout-center-justified;
                position: relative;
                width: 116px;
                height: 68px;
                border: 2px solid #8f9195;
                border-radius: 6px;
                box-sizing: border-box;
                margin-right: 22px;
            }
            .sortable-item.sortable-ghost {
                opacity: 0.45;
            }
            kano-bitmap-renderer {
                cursor: pointer;
            }
            .sortable-item.selected {
                border: 2px solid #fff;
            }
            .index-number {
                min-width: 18px;
                height: 18px;
                position: absolute;
                bottom: 4px;
                right: 4px;
                background: #bbb;
                color: #252b31;
                font-size: 14px;
                font-weight: bold;
                line-height: 18px;
                text-align: center;
                border-radius: 3px;
            }
            .sortable-item:not(.selected) .index-number {
                display: none;
            }
            iron-icon {
                --iron-icon-height: 16px;
                --iron-icon-width: 16px;
                margin: 0 18px;
                cursor: pointer;
                fill: #999;
            }
            iron-icon.end-arrow {
                transform: rotate(180deg);
            }
            x-carousel {
                position: relative;
                height: 112px;
                @apply --layout-horizontal;
                @apply --layout-center;
            }
            .disabled {
                opacity: 0.6;
                pointer-events: none;
            }
            [hidden] {
                display: none !important;
            }
        </style>
            <div class="action-container">
                <slot name="label"></slot>
                <div on-tap="addFrameTap" class\$="[[_computeButtonClass(running)]]">
                    <slot name="add-button"></slot>
                </div>
                <div on-tap="duplicateFrame" class\$="[[_computeButtonClass(running)]]">
                    <slot name="duplicate-button"></slot>
                </div>
                <div id="delete-slot" on-tap="deleteFrame" class\$="[[_computeButtonClass(running)]]">
                    <slot name="delete-button"></slot>
                </div>
                <div on-tap="deleteAllFrames" class\$="[[_computeButtonClass(running)]]">
                    <slot name="delete-all-button"></slot>
                </div>
            </div>
        <x-carousel id="carousel" keep-buttons-visible="">
            <iron-icon icon="kano-icons:arrow" slot="left-button" carousel-control-left=""></iron-icon>
            <div slot="content" class="carousel-content">
                <div id="padding-left" hidden\$="[[!running]]">
                </div>
                <sortable-js id="frames" group="frames" animation="150" on-start="_sortStart" on-end="_sortEnd">
                    <template is="dom-repeat" items="[[bitmaps]]" as="bm" id="repeat">
                        <div class\$="sortable-item [[_computeFrameSelectedClass(index, selectedIndex, running)]]">
                            <kano-bitmap-renderer width="[[width]]" height="[[height]]" spacing="1" pixel-size="4" bitmap="[[bm]]" on-tap="_selectFrame"></kano-bitmap-renderer>
                            <div hidden\$="[[!displayedIndex]]" class="index-number">[[displayedIndex]]</div>
                        </div>
                    </template>
                </sortable-js>
                <div id="padding-right" hidden\$="[[!running]]">
                </div>
            </div>
            <iron-icon class="end-arrow" icon="kano-icons:arrow" slot="right-button" carousel-control-right=""></iron-icon>
        </x-carousel>
        <kano-alert id="delete-all-alert" heading="Do you mean to start again?" text="You are about to delete all the frames!">
            <button class="kano-alert-primary" on-tap="_confirmDeleteAll" dialog-confirm="" slot="actions">Confirm</button>
            <button class="kano-alert-secondary" dialog-dismiss="" slot="actions">Cancel</button>
        </kano-alert>
`,

  is: 'kano-bitmap-list',

  behaviors: [
      AppEditorBehavior
  ],

  properties: {
      bitmaps: {
          type: Array,
          notify: true
      },
      selected: {
          type: Array,
          notify: true
      },
      selectedIndex: {
          type: Number,
          value: 0,
          notify: true
      },
      width: {
          type: Number,
          value: 1
      },
      height: {
          type: Number,
          value: 1
      },
      displayedIndex: {
          type: Number,
          computed: '_computeDisplayedIndex(selectedIndex)'
      },
      running: {
          type: Boolean,
          value: false,
          observer: '_onRunningChanged'
      },
      moveDelay: Number
  },

  observers: [
      '_selectedChanged(selected.*)',
      '_bitmapsChanged(bitmaps)'
  ],

  _computeDisplayedIndex (selectedIndex) {
      return selectedIndex + 1;
  },

  _computeButtonClass (running) {
      return running ? 'disabled' : '';
  },

  _selectedChanged (e) {
      if (this.sorting) {
          return;
      }

      this.async(this._moveToSelected);

      //Values of the 'selected' pixel array changed, update the bitmaps array
      if (e.path === 'selected.splices') {
          const splices = e.value;
          splices.indexSplices.forEach(splice => {
              this.splice(`bitmaps.${this.selectedIndex}`,
                      splice.index, 1, this.selected[splice.index]);
          });
      }
  },

  _bitmapsChanged () {
      if (this.bitmaps.length === 0) {
          this.addFrame();
      }
      if (!this.selected) {
          this.selected = this.bitmaps[0] && this.bitmaps[0].slice(0);
      }
  },

  _sortStart (e) {
      if (e.detail) {
          this.sorting = true;
          this._select(e.detail.item.children[0]);
      }
  },

  _sortEnd (e) {
      this.sorting = false;
      if (typeof e.newIndex === 'number') {
          this.selectedIndex = e.newIndex;
          this.selected = this.bitmaps[this.selectedIndex].slice(0);
      }
  },

  _selectFrame (e) {
      let event = dom(e);
      this._select(event.localTarget);
  },

  _select (target) {
      let model = this.$.repeat.modelForElement(target),
          bitmap = model.get('bm');
      this.selected = bitmap.slice(0);
      this.selectedIndex = this.bitmaps.indexOf(bitmap);
  },

  _computeFrameSelectedClass (index, selectedIndex, running) {
      return selectedIndex === index ? 'selected' : '';
  },

  duplicateFrame () {
      if (this._isFrameLimitReached()) {
          return;
      }
      const copy = this.bitmaps[this.selectedIndex].slice(0);
      this.selectedIndex++;
      this.splice('bitmaps', this.selectedIndex, 0, copy);
      this.set('selected', copy.slice(0));
      this.fire('tracking-event', {
            name: 'bitmap_frame_duplicated'
      });
  },

  addFrame () {
      this.debounce('add-frame', () => {
          if (this._isFrameLimitReached()) {
              return;
          }
          let frame = this.getEmptyFrame();

          if (this.bitmaps.length) {
              this.selectedIndex++;
          } else {
              this.selectedIndex = 0;
          }

          this.splice('bitmaps', this.selectedIndex, 0, frame);
          this.set('selected', frame.slice(0));

          this.notifyChange('light-animation-add-frame');
      }, 100);
  },

  addFrameTap () {
      this.addFrame();
      this.fire('tracking-event', {
            name: 'bitmap_frame_added'
      });
  },

  deleteFrame () {
      this.splice('bitmaps', this.selectedIndex, 1);

      if (this.bitmaps.length === 0) {
          this.addFrame();
      } else {
          this.selectedIndex = this.selectedIndex === 0 ?
                  this.selectedIndex : this.selectedIndex - 1;
          this.set('selected', this.bitmaps[this.selectedIndex].slice(0));
          this.fire('tracking-event', {
                name: 'bitmap_frame_removed'
          });
      }
  },

  deleteAllFrames () {
      //alert user
      if (Array.isArray(this.bitmaps)
              && this.bitmaps.length > 1
                      && this._bitmapsNotEmpty()) {
          this.$['delete-all-alert'].open();
      //there's only one frame or all frames are empty - delete without alert
      } else {
          this._confirmDeleteAll();
      }
  },

  _bitmapsNotEmpty () {
      let allColors = this.bitmaps.reduce((acc, bitmap, index, bitmaps) => {
          if (bitmaps.indexOf(bitmap) === index) {
              return acc.concat(bitmap);
          }
      }, []);
      return allColors.some(value => {
          return value !== '#000000'
      });
  },

  _confirmDeleteAll () {
      this.set('bitmaps', []);
      this.fire('tracking-event', {
            name: 'all_bitmap_frames_removed'
      });
  },

  _moveToSelected () {
      const target = dom(this.root).querySelector('.selected');
      if (target) {
          this.$.carousel.moveTo(this.$['padding-left'].offsetWidth +
                  target.offsetLeft + target.offsetWidth / 2, this.moveDelay);
      }
  },

  _onRunningChanged (running, wasRunning) {
      //set a padding around the frames, so the playback doesn't jump
      if (running) {
          this.$['padding-left'].style.width =
                  this.$['padding-right'].style.width = `${this.offsetWidth / 2}px`;
      }

      if (!running && wasRunning) {
          this._moveToSelected();
      }
  },

  _isFrameLimitReached () {
      if (this.bitmaps.length >= 512) {
          this.fire('frame-limit-reached');
          return true;
      }
  },

  getEmptyFrame () {
      const emptyFrame = [];
      for (let i = 0; i < this.width * this.height; i++) {
          emptyFrame.push('#000000');
      }
      return emptyFrame;
  }
});
