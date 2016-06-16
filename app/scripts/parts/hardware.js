import Part from './part';

export default class Hardware extends Part {

    constructor (opts) {
        super(opts);
        this.partType = 'hardware';
        // Allow the part to have a custom component instead of the icon only
        this.tagName = opts.component || 'kano-part-hardware';
    }
    toJSON () {
        let plain = super.toJSON.call(this);
        return plain;
    }
}