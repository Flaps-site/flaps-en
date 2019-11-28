'use strict';

Blockly.Blocks['action_alert'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('information box');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('A information box pops up on the page.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Window/alert');
    }
}

Blockly.Blocks['action_prompt'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('prompt box');
        this.setInputsInline(true);
        this.setOutput(true, 'String');
        this.setColour(180);
        this.setTooltip('An prompt box pops up on the page.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Window/prompt');
    }
}

Blockly.Blocks['action_confirm'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('confirmation box');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(180);
        this.setTooltip('A confirmation box pops up on the page.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Window/confirm');
    }
}

Blockly.Blocks['action_getStyle'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('get')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["element", "el"]
            ]), "SEL")
            .appendField('name');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('\'s style of element');
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('Get page element style.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_getAttr'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('get')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["element", "el"]
            ]), "SEL")
            .appendField('name');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('\'s attribute of element');
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('Get page element attributes.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_getInner'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('get')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["element", "el"]
            ]), "SEL")
            .appendField('name');
        this.appendDummyInput()
            .appendField('\'s')
            .appendField(new Blockly.FieldDropdown([
                ["html", "html"],
                ["text", "text"],
                ["value", "value"]
            ]), "INNER");
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('Get the inside of a page element.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_setStyle'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('set')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["element", "el"]
            ]), "SEL")
            .appendField('name');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('\'s element style');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('to');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('Set page element style.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_setAttr'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('set')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["element", "el"]
            ]), "SEL")
            .appendField('name');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('\'s element attribute');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('to');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('Set page element attribute.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_setInner'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('set')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["element", "el"]
            ]), "SEL")
            .appendField('name');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('\'s element inner')
            .appendField(new Blockly.FieldDropdown([
                ["html", "html"],
                ["text", "text"],
                ["value", "value"]
            ]), "INNER")
            .appendField('to');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('Sets the inner of a page element.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/API/Document/querySelector');
    }
}
