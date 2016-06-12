/* globals Blockly */

let pictureList;

/**
 * Check if a block is the ancestor of another one
 */
function checkAncestor(block, type) {
    let parent = block.parentBlock_;
    if (!parent) {
        return false;
    }
    if (parent.type == type) {
        return true;
    }
    return checkAncestor(parent, type);
}

export default pictureList = {
    partType: 'hardware',
    type: 'picture-list',
    label: 'Picture List',
    image: '/assets/part/box.svg',
    component: 'kano-ui-picture-list',
    colour: '#E73544',
    blocks: [{
        block: (ui) => {
            return {
                id: 'length',
                message0: `${ui.name}: length`,
                output: 'Number'
            };
        },
        javascript: (ui) => {
            return function (block) {
                return [`devices.get('${ui.id}').pictures.length`];
            };
        },
        pseudo: (ui) => {
            return function (block) {
                return [`devices.get('${ui.id}').pictures.length`];
            };
        }
    },{
        block: (ui) => {
            return {
                id: 'add_picture',
                message0: `${ui.name}: add picture %1`,
                args0: [{
                    type: 'input_value',
                    name: 'PICTURE'
                }],
                previousStatement: null,
                nextStatement: null
            };
        },
        javascript: (ui) => {
            return function (block) {
                let picture = Blockly.JavaScript.valueToCode(block, 'PICTURE') || '';
                return `devices.get('${ui.id}').push('pictures', ${picture});\n`;
            };
        },
        pseudo: (ui) => {
            return function (block) {
                let picture = Blockly.Pseudo.valueToCode(block, 'PICTURE') || '';
                return `devices.get('${ui.id}').push('pictures', ${picture});\n`;
            };
        }
    },{
        block: (ui) => {
            return {
                id: 'get_nth_picture',
                message0: `${ui.name}: get picture %1 in list`,
                args0: [{
                    type: "input_value",
                    name: "INDEX",
                    check: 'Number'
                }],
                output: true,
                shadow: {
                    'INDEX': '<shadow type="math_number"><field name="NUM">0</field></shadow>'
                }
            };
        },
        javascript: (ui) => {
            return function (block) {
                let index = Blockly.JavaScript.valueToCode(block, 'INDEX') || 0;
                return [`devices.get('${ui.id}').pictures[${index}] || ''`];
            };
        },
        pseudo: (ui) => {
            return function (block) {
                let index = Blockly.Pseudo.valueToCode(block, 'INDEX') || 0;
                return [`devices.get('${ui.id}').pictures[${index}] || ''`];
            };
        }
    },{
        block: (part) => {
            return {
                id: 'for_each_picture',
                message0: `${part.name}: for each picture`,
                message1: 'do %1',
                args1: [{
                    type: "input_statement",
                    name: "DO"
                }],
                previousStatement: null,
                nextStatement: null
            };
        },
        javascript: (part) => {
            return function (block) {
                let statement = Blockly.JavaScript.statementToCode(block, 'DO'),
                    code = `devices.get('${part.id}').pictures.forEach(function (picture) {\n${statement}});\n`;
                return code;
            };
        },
        pseudo: (part) => {
            return function (block) {
                let statement = Blockly.Pseudo.statementToCode(block, 'DO'),
                    code = `devices.get('${part.id}').pictures.forEach(function (picture) {\n${statement}});\n`;
                return code;
            };
        }
    },{
        block: (part) => {
            return {
                id: 'picture',
                message0: `${part.name}: picture`,
                output: true
            };
        },
        javascript: (part) => {
            return function (block) {
                let code = `picture`;
                if (!checkAncestor(block, `${part.id}#for_each_picture`)) {
                    code = `devices.get('${part.id}').topPicture`;
                }
                return [code];
            };
        },
        pseudo: (part) => {
            return function (block) {
                let code = `picture`;
                if (!checkAncestor(block, `${part.id}#for_each_picture`)) {
                    code = `devices.get('${part.id}').topPicture`;
                }
                return [code];
            };
        }
    },{
        block: (part) => {
            return {
                id: 'play',
                message0: `${part.name}: play`,
                previousStatement: null,
                nextStatement: null
            };
        },
        javascript: (part) => {
            return function (block) {
                let code = `devices.get('${part.id}').play();\n`;
                return code;
            };
        },
        pseudo: (part) => {
            return function (block) {
                let code = `devices.get('${part.id}').play();\n`;
                return code;
            };
        }
    },{
        block: (part) => {
            return {
                id: 'pause',
                message0: `${part.name}: pause`,
                previousStatement: null,
                nextStatement: null
            };
        },
        javascript: (part) => {
            return function (block) {
                let code = `devices.get('${part.id}').pause();\n`;
                return code;
            };
        },
        pseudo: (part) => {
            return function (block) {
                let code = `devices.get('${part.id}').pause();\n`;
                return code;
            };
        }
    }]
};
