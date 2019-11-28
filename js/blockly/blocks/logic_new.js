'use strict';

Blockly.Blocks['logic_interval'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("set a timer name");
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField("interval");
        this.appendStatementInput("STAT")
            .setCheck(null)
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('Set a timer.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Window/setInterval');
    }
}

Blockly.Blocks['logic_interval_clear'] = {
    init: function() {
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('clear a timer name');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('Clear a timer.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/window/clearInterval');
    }
}

Blockly.Blocks['logic_timeout'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("set a one-shot timer name");
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField("interval");
        this.appendStatementInput("STAT")
            .setCheck(null)
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('Set a one-shot timer.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Window/setTimeout');
    }
}

Blockly.Blocks['logic_timeout_clear'] = {
    init: function() {
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('clear a one-shot timer name');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('Clear a one-shot timer.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/window/clearTimeout');
    }
}
