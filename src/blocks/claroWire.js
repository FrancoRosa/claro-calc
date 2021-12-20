import Blockly from "node-blockly/browser";

const claroWire = {
  name: "claroWire",
  category: "Claro",
  block: {
    init: function () {
      this.jsonInit({
        type: "claro_wire",
        message0: "Longitud[m] %1 %2 %3",
        args0: [
          {
            type: "field_number",
            name: "LENGTH",
            value: 16,
          },
          {
            type: "input_dummy",
            align: "CENTRE",
          },
          {
            type: "input_value",
            name: "NAME",
          },
        ],
        inputsInline: false,
        output: null,
        colour: 160,
        tooltip: "",
        helpUrl: "",
      });
    },
  },
  generator: (block) => {
    var number_length = block.getFieldValue("LENGTH");
    var value_name = Blockly.JavaScript.valueToCode(
      block,
      "NAME",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    const l1 = `ul += ${number_length}*0.05;\n`;
    const l2 = `dl -= ${number_length}*0.16;\n`;
    const l3 = `${value_name}`;
    var code = `${l1}${l2}${l3}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  },
};

export default claroWire;
