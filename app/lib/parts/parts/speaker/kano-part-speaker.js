import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { UIMixin } from '../../../../elements/part/kano-ui-behavior.js';
import { AudioPlayer } from '../../../../scripts/kano/music/player.js';
import { AssetLoader } from '../../../asset/loader.js';
import { Store } from '../../../../scripts/kano/make-apps/store.js';
import { SpeakerMixin } from './speaker.js';
import { TextToSpeech } from './text-to-speech.js';


const OSCILLATOR_FREQ_RANGE_LOW = 20;
const OSCILLATOR_FREQ_RANGE_HI = 5000;

class KanoPartSpeaker extends SpeakerMixin(UIMixin(PolymerElement)) {
    static get is() { return 'kano-part-speaker'; }
    static get properties() {
        return {
            volume: {
                type: Number,
                value: 100,
            },
        };
    }
    static get observers() {
        return [
            '_mutedChanged(model.muted)',
        ];
    }
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
            <div class="part">
                <kano-ui-item model="[[model]]" size="50" id\$="part-[[model.id]]" instance=""></kano-ui-item>
            </div>
        `;
    }
    ready() {
        super.ready();
        const { config } = Store.getState();
        this.assetLoader = new AssetLoader(this.model.config.assetsRoot);
        this.sources = [];
        this.players = [];
        this.oscillators = [];
        this.tts = new TextToSpeech();
        this.tts.configure(config);
        try {
            this.ctx = AudioPlayer.context;
            this.webAudioSupported = true;
            this.gainControl = this.ctx.createGain();
            this.gainControl.connect(this.ctx.destination);
            this.output = this.gainControl;

            this.oscillatorsGain = this.ctx.createGain();
            this.oscillatorsGain.connect(this.output);
            this.oscillatorsGain.gain.value = 0.2;
            this.setVolume(this.volume);
        } catch (e) {
            this.webAudioSupported = false;
        }
    }
    say(text, rate, language) {
        this.tts.speak(text, rate, language);
    }
    play(sample) {
        if (!sample) {
            return;
        }
        this.loadSample(sample)
            .then((buffer) => {
                const player = new AudioPlayer(buffer, this.gainControl);
                player.play();
                player.source.playbackRate.value = this._playbackRate;
                this.players.push(player);
            });
    }
    loop(sample) {
        if (!sample) {
            return;
        }
        this.loadSample(sample)
            .then((buffer) => {
                const player = new AudioPlayer(buffer, this.gainControl, { loop: true });
                player.play();
                player.source.playbackRate.value = this._playbackRate;
                this.players.push(player);
            });
    }
    setPlaybackRate(rate) {
        let realRate;
        rate = Math.min(Math.max(rate, 0), 200);
        realRate = (rate) * 0.01;
        this.players.forEach((player) => {
            if (player.source instanceof AudioBufferSourceNode) {
                player.source.playbackRate.value = realRate;
            }
        });
        this.sources.forEach((source) => {
            if (source instanceof AudioBufferSourceNode) {
                source.playbackRate.value = realRate;
            }
        });
        this._playbackRate = realRate;
    }
    start(...args) {
        super.start(...args)
        this._playbackRate = 1;
        this.volume = 100;
    }
    stop(...args) {
        super.stop(...args);
        if (this.tts) {
            this.tts.stop();
        }
        this.players.forEach((player) => {
            // Ignore sources not started
            try {
                player.stop();
            } catch (e) {}
        });
        this.sources.forEach((source) => {
            // Ignore sources not started
            try {
                source.stop();
            } catch (e) {}
        });
        this.players = [];
        this.sources = [];
        this.synth = null;
        this._playbackRate = 1;
    }
    _mutedChanged() {
        this.setVolume(this.volume);
    }
    setVolume(volume) {
        if (!this.model || !this.gainControl) {
            return;
        }

        let value;
        this.volume = Math.min(Math.max(volume, 0), 100);
        // the maximum value is limited to an ear-friendly sound pressure level
        value = this.model.muted ? 0 : (this.volume * 0.004);
        if (this.gainControl) {
            this.gainControl.gain.value = value;
        }
    }
    loadSample(name) {
        return this.assetLoader.getAsset(name);
    }
    randomSound(set) {
        let randomSample,
            samples,
            sets;
        if (!set || set === 'any') {
            sets = Object.keys(this.model.config.samples);
            set = sets[Math.floor(Math.random() * sets.length)];
        }
        samples = Object.keys(this.model.config.samples[set]);
        randomSample = samples[Math.floor(Math.random() * samples.length)];
        return randomSample;
    }
    _createOscillator() {
        const oscillator = this.ctx.createOscillator();

        oscillator.type = 'sine';
        oscillator.connect(this.oscillatorsGain);

        return oscillator;
    }
    playFrequency(freq, length) {
        const oscillator = this._createOscillator();

        oscillator.frequency.value = OSCILLATOR_FREQ_RANGE_LOW +
            ((freq) / 100) * OSCILLATOR_FREQ_RANGE_HI;
        oscillator.start(0);
        oscillator.stop(this.ctx.currentTime + length / 1000);

        oscillator.onended = () => {
            const index = this.sources.indexOf(oscillator);

            if (index >= 0) {
                setTimeout(() => {
                    this.sources.splice(index, 1);
                }, 0);
            }
        };

        this.sources.push(oscillator);
    }
    startSynth() {
        if (!this.synth) {
            this.synth = this._createOscillator();
            this.sources.push(this.synth);
            this.synth.start(0);
        }
    }
    setSynthFrequency(freq) {
        if (this.synth) {
            this.synth.frequency.value = OSCILLATOR_FREQ_RANGE_LOW +
                ((freq) / 100) * OSCILLATOR_FREQ_RANGE_HI;
        }
    }
}

customElements.define(KanoPartSpeaker.is, KanoPartSpeaker);
