import { PartInlineDisplay } from '../../inline-display.js';
import { TextInputPart } from './text-input.js';
import { Flash } from '../../flash.js';

export class TextInputInlineDisplay extends PartInlineDisplay<HTMLDivElement> {
    public domNode: HTMLDivElement;
    private flash : Flash = new Flash();
    constructor(part : TextInputPart) {
        super(part);
        this.domNode = this.flash.domNode;
        this.domNode.style.marginRight = '8px';
        part.onChange(() => {
            this.flash.trigger();
        });
    }
    onInject() {}
}
