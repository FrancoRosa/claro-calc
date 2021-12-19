import Blockly from "node-blockly/browser";

const claroTap = {
  name: "claroTap",
  category: "Demo",
  block: {
    init: function () {
      this.jsonInit({
        type: "claro_tab",
        message0: "UL %1 %2 DL %3 %4 %5",
        args0: [
          {
            type: "field_number",
            name: "UL",
            value: 0,
          },
          {
            type: "input_dummy",
          },
          {
            type: "field_number",
            name: "DL",
            value: 0,
          },
          {
            type: "input_dummy",
          },
          {
            type: "input_value",
            name: "NAME",
          },
        ],
        inputsInline: false,
        colour: 160,
        tooltip: "",
        helpUrl: "",
      });
    },
  },
  generator: (block) => {
    var number_ul = block.getFieldValue("UL");
    var number_dl = block.getFieldValue("DL");
    var value_name = Blockly.JavaScript.valueToCode(
      block,
      "NAME",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `console.log(${number_ul}, ${number_dl}, ${value_name});\n`;
    return code;
  },
};

export default claroTap;
