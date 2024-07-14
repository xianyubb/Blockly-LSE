import * as Blockly from 'blockly/core';

const Event = {
    "type": "Event",
    "message0": "mc::listen %1 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "event",
            "check": "String"
        },
        {
            "type": "input_statement",
            "name": "callback",
            "check": "any" || "Boolean"
        }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": "",
    "output": null
};

export const Event_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    Event
]);