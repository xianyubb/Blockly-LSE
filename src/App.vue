<script lang="ts">
import * as Blockly from 'blockly';
import { mc_blocks } from './blocks/GameAPI/mc';
import { Event_blocks } from './blocks/EventAPI/Event';
import { PlayerEvent_blocks } from './blocks/EventAPI/PlayerEvent';
import { PlayerAPI_blocks } from './blocks/GameAPI/player';

import { forBlock } from './generators/javascript';
import { javascriptGenerator } from 'blockly/javascript';
import { save, load } from './serialization';
import { toolbox } from './toolbox';
import * as zh from "blockly/msg/zh-hans";
import './assets/index.css';


export default {
    mounted() {
        Blockly.setLocale(zh);
        Blockly.common.defineBlocks(mc_blocks);
        Blockly.common.defineBlocks(Event_blocks);
        Blockly.common.defineBlocks(PlayerEvent_blocks);
        Blockly.common.defineBlocks(PlayerAPI_blocks);
        Object.assign(javascriptGenerator.forBlock, forBlock);

        const codeDiv = document.getElementById('generatedCode')?.firstChild;
        const outputDiv = document.getElementById('output');
        const blocklyDiv = document.getElementById('blockly-div');

        if (!blocklyDiv) {
            throw new Error(`div with id 'blockly-div' not found`);
        }

        const ws = Blockly.inject(blocklyDiv, {
            toolbox, media: "./src/assets/media", grid: {
                spacing: 20, length: 5,
                colour: '#000',
                snap: true
            },
            trashcan: true
        });


        const runCode = () => {

            const code = javascriptGenerator.workspaceToCode(ws);

            
            if (codeDiv) codeDiv.textContent = code;

            if (outputDiv) outputDiv.innerHTML = '';

            // eval(code);
        };

        if (ws) {
            // Load the initial state from storage and run the code.
            load(ws);
            runCode();

            // Every time the workspace changes state, save the changes to storage.
            ws.addChangeListener((e: Blockly.Events.Abstract) => {
                // UI events are things like scrolling, zooming, etc.
                // No need to save after one of these.
                if (e.isUiEvent) return;
                save(ws);
            });

            // Whenever the workspace changes meaningfully, run the code again.
            ws.addChangeListener((e: Blockly.Events.Abstract) => {
                // Don't run the code when the workspace finishes loading; we're
                // already running it once when the application starts.
                // Don't run the code during drags; we might have invalid state.
                if (
                    e.isUiEvent ||
                    e.type == Blockly.Events.FINISHED_LOADING ||
                    ws.isDragging()
                ) {
                    return;
                }
                runCode();
            });
        }
    },
}

</script>


<template>
    <div id="pageContainer">
        <div id="outputPane">
            <pre id="generatedCode"><code></code></pre>
            <div id="output"></div>
        </div>
        <div id="blockly-div"></div>
    </div>
</template>