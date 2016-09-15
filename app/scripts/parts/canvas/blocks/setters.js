/* globals Blockly */

export default [{
    block: (ui) => {
        return {
            id: 'color',
            lookup: 'fillColor(color)',
            message0: `${ui.name}: fill color %1`,
            args0: [{
                type: "input_value",
                name: "COLOR",
                check: 'Colour'
            }],
            previousStatement: null,
            nextStatement: null
        };
    },
    javascript: (ui) => {
        return function (block) {
            let color = Blockly.JavaScript.valueToCode(block, 'COLOR') || 'null';
            return `devices.get('${ui.id}').modules.setters.color(${color});\n`;
        };
    },
    pseudo: (ui) => {
        return function (block) {
            let color = Blockly.Pseudo.valueToCode(block, 'COLOR') || 'null';
            return `devices.get('${ui.id}').modules.setters.color(${color});\n`;
        };
    }
},{
    block: (ui) => {
        return {
            id: 'stroke',
            lookup: 'stroke(color, thickness)',
            message0: `${ui.name}: stroke color %1 thickness %2`,
            args0: [{
                type: "input_value",
                name: "COLOR",
                check: 'Colour'
            },{
                type: "input_value",
                name: "SIZE",
                check: 'Number',
                align: 'RIGHT'
            }],
            previousStatement: null,
            nextStatement: null,
            shadow: {
                'SIZE': '<shadow type="math_number"><field name="NUM">1</field></shadow>'
            }
        };
    },
    javascript: (ui) => {
        return function (block) {
            let color = Blockly.JavaScript.valueToCode(block, 'COLOR') || 'null',
                size = Blockly.JavaScript.valueToCode(block, 'SIZE') || 'null';
            return `devices.get('${ui.id}').modules.setters.stroke(${color}, ${size});\n`;
        };
    },
    pseudo: (ui) => {
        return function (block) {
            let color = Blockly.Pseudo.valueToCode(block, 'COLOR') || 'null',
                size = Blockly.Pseudo.valueToCode(block, 'SIZE') || 'null';
            return `devices.get('${ui.id}').modules.setters.stroke(${color}, ${size});\n`;
        };
    }
}];
