import { Field } from "@kano/kwc-blockly/blockly.js";
import { IItemData, IItemDataResource } from "./stamps-field";

const sampleData = [
    {
        id: '',
        label: '',
        resources: [
            {
                id: '',
                src: '',
                label: '',
            },
        ],
    },
];
export function FieldWithLabelMixin(Base: any) {
    return class extends Base {
        label: string = '';
        items: IItemData[] = sampleData;
        constructor(...args: any[]) {
            super(...args);
        }
        getItemForValue(value: string): { id: string, label: string, src: string } | null {
            for (let i = 0; i < this.items.length; i += 1) {
                const found = this.items[i].resources.find((s : IItemDataResource) => s.id === value);
                if (found) {
                    return found;
                }
            }
            return null;
        }
        getLabelFromValue(value: string): string {
            const item = this.getItemForValue(value);
            if (item) {
                return item.label;
            }
            return '';
        }
        setLabel(label: string) {
            this.label = label;
        }
        getLabel() {
            return this.label;
        }
    }
}