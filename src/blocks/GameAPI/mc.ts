import * as Blockly from 'blockly/core';

const mc_getTime = {
    "type": "mc_getTime",
    "tooltip": "",
    "helpUrl": "",
    "message0": "mc::getTime %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TimeID",
            "align": "CENTRE",
            "check": "Number"
        }
    ],
    "colour": 120,
    "output": null,
};

const mc_setTime = {
    "type": "mc_setTime",
    "tooltip": "",
    "helpUrl": "",
    "message0": "mc::setTime %1",
    "args0": [
        {
            "type": "input_value",
            "name": "tick",
            "align": "CENTRE",
            "check": "Number"
        },
    ],
    "colour": 120,
    "output": null
};

const mc_getWeather = {
    "type": "mc_getWeather",
    "tooltip": "",
    "helpUrl": "",
    "message0": "mc::getWeather",
    "args0": [],
    "colour": 120,
    "output": null
}

const mc_setWeather = {
    "type": "mc_setWeather",
    "tooltip": "",
    "helpUrl": "",
    "message0": "mc::setWeather %1",
    "args0": [
        {
            "type": "input_value",
            "name": "WeatherID",
            "align": "CENTRE",
            "check": "Number"
        },
    ],
    "colour": 120,
    "output": null
}


export const mc_blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    mc_getTime,
    mc_setTime,
    mc_getWeather,
    mc_setWeather,
]);
