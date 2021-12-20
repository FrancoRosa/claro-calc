import Blockly from "node-blockly/browser";

const claroSplitter3 = {
  name: "claroSplitter3",
  category: "Claro",
  block: {
    init: function () {
      this.jsonInit({
        type: "claro_splitter_3",
        message0: "-7dB %1 -7dB %2 -3.5dB %3",
        args0: [
          {
            type: "input_value",
            name: "G1",
          },
          {
            type: "input_value",
            name: "G2",
          },
          {
            type: "input_value",
            name: "G3",
          },
        ],
        inputsInline: false,
        output: null,
        colour: 330,
        tooltip: "",
        helpUrl: "",
      });
    },
  },
  generator: (block) => {
    var value_g1 = Blockly.JavaScript.valueToCode(
      block,
      "G1",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_g2 = Blockly.JavaScript.valueToCode(
      block,
      "G2",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_g3 = Blockly.JavaScript.valueToCode(
      block,
      "G3",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `${value_g1 + 7}${value_g2 + 7}${value_g3 + 3.5}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  },
};

export default claroSplitter3;
