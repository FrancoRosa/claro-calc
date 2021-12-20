import Blockly from "node-blockly/browser";

const claroTap = {
  name: "claroTap",
  category: "Claro",
  block: {
    init: function () {
      this.jsonInit({
        type: "claro_tab",
        message0: "US[dBmv] %1 %2 DS[dBmv] %3 %4 %5",
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
        colour: 20,
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
    const c1 = "// TAB\n";
    const l1 = `var ul = ${number_ul};\n`;
    const l2 = `var dl = ${number_dl};\n`;
    const l3 = `${value_name}`;
    var code = `${c1}${l1}${l2}${l3}`;
    return code;
  },
};

export default claroTap;
