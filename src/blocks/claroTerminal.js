import Blockly from "node-blockly/browser";

const claroTerminal = {
  name: "claroTerminal",
  category: "Demo",
  block: {
    init: function () {
      this.jsonInit({
        type: "claro_terminal",
        lastDummyAlign0: "CENTRE",
        message0: "Terminal %1",
        args0: [
          {
            type: "field_input",
            name: "NAME",
            text: "T1",
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
    {
      var text_name = block.getFieldValue("NAME");
      var code = `console.log('${text_name}', 'UL:', ul, 'DL:', dl);`;
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
  },
};

export default claroTerminal;
