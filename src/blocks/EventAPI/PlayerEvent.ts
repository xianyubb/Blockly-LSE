import * as Blockly from 'blockly/core';


const onPreJoin = {
    "type": "onPreJoin",
    "message0": "onPreJoin %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "player",
            "check": "Player"
        }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": "",
    "output": null,
    "previousStatement": null
};


export const PlayerEvent_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    onPreJoin
]);

