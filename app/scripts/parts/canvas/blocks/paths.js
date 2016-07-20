/* globals Blockly */

export default [{
    block: (ui) => {
        return {
            id: 'line_to',
            message0: `${ui.name}: line to %1 %2`,
            args0: [{
                type: "input_value",
                name: "X",
                check: 'Number'
            },{
                type: "input_value",
                name: "Y",
                check: 'Number'
            }],
            inlineInputs: true,
            previousStatement: null,
            nextStatement: null,
            shadow: {
                'X': '<shadow type="math_number"><field name="NUM">5</field></shadow>',
                'Y': '<shadow type="math_number"><field name="NUM">5</field></shadow>'
            }
        };
    },
    javascript: (ui) => {
        return function (block) {
            let x = Blockly.JavaScript.valueToCode(block, 'X') || 'null',
                y = Blockly.JavaScript.valueToCode(block, 'Y') || 'null';
            return `devices.get('${ui.id}').modules.paths.lineTo(${x}, ${y});\n`;
        };
    },
    pseudo: (ui) => {
        return function (block) {
            let x = Blockly.Pseudo.valueToCode(block, 'X') || 'null',
                y = Blockly.Pseudo.valueToCode(block, 'Y') || 'null';
            return `devices.get('${ui.id}').modules.paths.lineTo(${x}, ${y});\n`;
        };
    }
},{
    block: (ui) => {
        return {
            id: 'line',
            message0: `${ui.name}: line %1 %2`,
            args0: [{
                type: "input_value",
                name: "X",
                check: 'Number'
            },{
                type: "input_value",
                name: "Y",
                check: 'Number'
            }],
            inlineInputs: true,
            previousStatement: null,
            nextStatement: null,
            shadow: {
                'X': '<shadow type="math_number"><field name="NUM">5</field></shadow>',
                'Y': '<shadow type="math_number"><field name="NUM">5</field></shadow>'
            }
        };
    },
    javascript: (ui) => {
        return function (block) {
            let x = Blockly.JavaScript.valueToCode(block, 'X') || 'null',
                y = Blockly.JavaScript.valueToCode(block, 'Y') || 'null';
            return `devices.get('${ui.id}').modules.paths.line(${x}, ${y});\n`;
        };
    },
    pseudo: (ui) => {
        return function (block) {
            let x = Blockly.Pseudo.valueToCode(block, 'X') || 'null',
                y = Blockly.Pseudo.valueToCode(block, 'Y') || 'null';
            return `devices.get('${ui.id}').modules.paths.line(${x}, ${y});\n`;
        };
    }
}];