import "./App.css";
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category } from "react-blockly-drawer";
import claroTap from "./blocks/claroTap";
import claroWire from "./blocks/claroWire";
import claroTerminal from "./blocks/claroTerminal";
import { useState } from "react";
import claroSplitter3 from "./blocks/claroSplitter3";
import format from "xml-formatter";

const App = () => {
  let newCode = "";
  let newWorkspace = "";

  const handleChange = (code, workspace) => {
    newCode = code;
    newWorkspace = workspace;
  };

  return (
    <div className="App">
      <BlocklyDrawer
        tools={[claroTap, claroWire, claroTerminal, claroSplitter3]}
        injectOptions={{
          collapse: true,
          maxInstances: 2,
        }}
        onChange={handleChange}
        language={Blockly.JavaScript}
        appearance={{
          categories: {
            Claro: {
              colour: "270",
            },
          },
        }}
      />
      <button
        className="button"
        onClick={() => {
          console.log(format(newWorkspace));
          console.log(newCode);
          console.log(eval(newCode));
        }}
      >
        Eval
      </button>
    </div>
  );
};

export default App;
