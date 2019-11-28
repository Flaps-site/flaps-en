'use strict';

Blockly.Blocks['data_to_number'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("convert to number");
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(40);
        this.setTooltip('Converts data to a numeric type.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number');
    }
}

Blockly.Blocks['data_to_boolean'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("convert to boolean");
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(40);
        this.setTooltip('Convert the data to a Boolean type (true, false).');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean');
    }
}

Blockly.Blocks['data_typeof'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Get the type of");
        this.setInputsInline(true);
        this.setOutput(true, 'String');
        this.setColour(40);
        this.setTooltip('Get the type of data.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof');
    }
}

Blockly.Blocks['data_isnan'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("is NaN");
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(40);
        this.setTooltip('Determine if the data is NaN (Not a Number).');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN');
    }
}

Blockly.Blocks['data_object_generator'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("create empty objects");
        this.setOutput(true, 'Object');
        this.setColour(40);
        this.setTooltip('Create empty objects.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_object_add_member'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck('String')
            .appendField("set member");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("that value is");
        this.appendValueInput("OBJ")
            .setCheck('Object')
            .appendField("to object");
        this.setInputsInline(true);
        this.setColour(40);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set data to the object.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_object_get_member'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck('String')
            .appendField("get member\'s value");
        this.appendValueInput("OBJ")
            .setCheck('Object')
            .appendField("in the object");
        this.setInputsInline(true);
        this.setColour(40);
        this.setOutput(true, null);
        this.setTooltip('Get the data in the object.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_object_get_all_member'] = {
    init: function() {
        this.appendValueInput("OBJ")
            .setCheck('Object')
            .appendField("get all the member in the object");
        this.setInputsInline(true);
        this.setColour(40);
        this.setOutput(true, 'Array');
        this.setTooltip('Get all member names in the object (returns a list).');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_date_get_now_time_number'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('get current timestamp number');
        this.setColour(80);
        this.setOutput(true, 'Number');
        this.setTooltip('Get timestamp numbers from 1970 to the present.');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date');
    }
}

Blockly.Blocks['data_date_get_time'] = {
    init: function() {
        this.appendValueInput("NUM")
            .setCheck('Number')
            .appendField('use');
        this.appendDummyInput()
            .appendField('to get')
            .appendField(new Blockly.FieldDropdown([
                ["year", "getFullYear()"],
                ["month", "getMonth() + 1"],
                ["day", "getDate()"],
                ["hour", "getHours()"],
                ["minute", "getMinutes()"],
                ["second", "getSeconds() + 1"],
                ["millisecond", "getMilliseconds() + 1"],
                ["week", "getDay()"]
            ]), "TYPE");
        this.setInputsInline(true);
        this.setColour(80);
        this.setOutput(true, 'Number');
        this.setTooltip('Use the timestamp number to get some time information (returned number).');
        this.setHelpUrl('https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date');
    }
}
