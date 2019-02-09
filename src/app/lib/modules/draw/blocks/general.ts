import { Blockly, Block } from '@kano/kwc-blockly/blockly.js';

export const general : any[] = [{
    block: (part : any) => {
        return {
            id: 'set_background_color',
            message0: `${part.name}: Set background color %1`,
            args0: [{
                type: "input_value",
                name: "COLOR",
                check: 'Colour'
            }],
            inlineInputs: true,
            previousStatement: null,
            nextStatement: null,
            shadow: {
                'COLOR': `<shadow type="colour_picker"><field name="COLOUR">#ffffff</field></shadow>`,
            },
        };
    },
    javascript: () => {
        return function (block : Block) {
            let c = Blockly.JavaScript.valueToCode(block, 'COLOR') || '#ffffff';
            return `ctx.background = ${c};\n`;
        };
    }
}, {
    block: (part : any) => {
        return {
            id: 'set_transparency',
            message0: `${part.name}: Set transparentcy to %1`,
            args0: [{
                type: "input_value",
                name: "ALPHA",
                check: 'Number'
            }],
            inlineInputs: true,
            previousStatement: null,
            nextStatement: null,
            shadow: {
                'ALPHA': `<shadow type="math_number"><field name="NUM">100</field></shadow>`,
            },
        };
    },
    javascript: () => {
        return function (block : Block) {
            let a = Blockly.JavaScript.valueToCode(block, 'ALPHA') || '100';
            return `ctx.opacity = ${a};\n`;
        };
    }
}];

export default general;
