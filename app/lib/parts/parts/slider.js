const slider = {
    partType: 'ui',
    type: 'slider',
    label: Kano.MakeApps.Msg.PART_SLIDER_NAME,
    image: '/assets/part/slider.svg',
    component: 'kano-part-slider',
    customizable: {
        properties: [{
            key: 'min',
            type: 'range',
            label: Kano.MakeApps.Msg.MIN,
        }, {
            key: 'max',
            type: 'range',
            label: Kano.MakeApps.Msg.MAX,
        }, {
            key: 'default',
            type: 'range',
            label: Kano.MakeApps.Msg.DEFAULT,
        }],
        style: [],
    },
    userProperties: {
        min: 0,
        max: 100,
        default: 0,
    },
    events: [{
        label: Kano.MakeApps.Msg.CHANGED,
        id: 'update',
    }],
    blocks: [{
        block: (ui) => {
            return {
                id: 'get_value',
                message0: `${ui.name}: ${Blockly.Msg.BLOCK_VALUE}`,
                output: 'Number',
            };
        },
        javascript: (ui) => {
            return function (block) {
                return [`devices.get('${ui.id}').getValue()`];
            };
        },
    }, {
        block: (part) => {
            return {
                id: 'set_value',
                lookup: 'setValue(value)',
                message0: `${part.name}: ${Blockly.Msg.BLOCK_SLIDER_SET_VALUE}`,
                args0: [{
                    type: "input_value",
                    name: "VALUE",
                    check: 'Number',
                }],
                previousStatement: null,
                nextStatement: null,
                shadow: {
                    'VALUE': `<shadow type="math_number"><field name="NUM">0</field></shadow>`
                },
            };
        },
        javascript: (part) => {
            return function (block) {
                let value = Blockly.JavaScript.valueToCode(block, 'VALUE') || 'null';
                return `devices.get('${part.id}').setValue(${value});\n`;
            };
        },
    }],
};

export default slider;
