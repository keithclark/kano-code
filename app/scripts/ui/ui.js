import ComponentStore from '../service/components';

export default class UI {
    constructor (opts) {
        this.type = opts.type;
        this.label = opts.label;
        this.image = opts.image;
        this.colour = opts.colour;
        this.blocks = opts.blocks || [];
        this.events = opts.events || [];
        this.listeners = opts.listeners || [];
        this.customizable = opts.customizable || { style: [], properties: [] };
        this.customizable.style = this.customizable.style || [];
        this.customizable.properties = this.customizable.properties || [];
        this.userStyle = opts.userStyle || {};
        this.userProperties = opts.userProperties || {};
    }
    getElement () {
        return ComponentStore.get(this.id).element;
    }
    addBlock (block) {
        this.blocks.push(block);
    }
    addEvent (event) {
        this.events.push(event);
    }
    stop () {
        this.removeListeners();
    }
    start () {

    }
    addEventListener (name, callback) {
        this.listeners.push(arguments);
    }
    removeListeners () {
        this.listeners = [];
    }
    toJSON () {
        let plain = {};
        plain.id = this.id;
        plain.name = this.name;
        plain.type = this.type;
        plain.userStyle = this.userStyle;
        plain.userProperties = this.userProperties;
        plain.position = this.position;
        return plain;
    }
    load (plain) {
        this.id = plain.id;
        this.name = plain.name;
        this.userStyle = plain.userStyle;
        this.userProperties = plain.userProperties;
        this.position = plain.position;
    }
}
