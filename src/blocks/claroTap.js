import Blockly from "node-blockly/browser";

const claroTap = {
  name: "claroTap",
  category: "Demo",
  block: {
    init: function () {
      this.jsonInit({
        type: "claro_tab",
        message0: "UL[dBmv] %1 %2 DL[dBmv] %3 %4 %5",
        args0: [
          {
            type: "field_number",
            name: "UL",
            value: 43,
          },
          {
            type: "input_dummy",
          },
          {
            type: "field_number",
            name: "DL",
            value: 9,
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
    const l1 = `let ul = ${number_ul};\n`;
    const l2 = `let dl = ${number_dl};\n`;
    const l3 = `${value_name}`;
    var code = `${l1}${l2}${l3}`;
    return code;
  },
};

export default claroTap;
