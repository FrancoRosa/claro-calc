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
    const d1 = "var ul1 = ul;\n";
    const d2 = "var ul2 = ul;\n";
    const d3 = "var ul3 = ul;\n";
    const d4 = "var dl1 = dl;\n";
    const d5 = "var dl2 = dl;\n";
    const d6 = "var dl3 = dl;\n";
    const l1ul = `ul1 += +7;\n`;
    const l1dl = `dl1 -= +7;\n`;
    const l2ul = `ul2 += +7;\n`;
    const l2dl = `dl2 -= +7;\n`;
    const l3ul = `ul3 += +3.5;\n`;
    const l3dl = `dl3 -= +3.5;\n`;
    var code1 = `${d1}${d2}${d3}${d4}${d5}${d6}${d1}${d2}${d3}`;
    var code2 = `${l1ul}${l1dl}${l2ul}${l2dl}${l3ul}${l3dl}`;
    var code = `${code1}${code2}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  },
};

export default claroSplitter3;
