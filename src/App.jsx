import "./App.css";
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category } from "react-blockly-drawer";
import claroTap from "./blocks/claroTap";
import claroWire from "./blocks/claroWire";
import claroTerminal from "./blocks/claroTerminal";
import { useState } from "react";
import claroSplitter3 from "./blocks/claroSplitter3";

const App = () => {
  let newCode = "";

  const handleChange = (code, workspace) => {
    newCode = code;
  };

  return (
    <div className="App">
      <BlocklyDrawer
        tools={[claroTap, claroWire, claroTerminal, claroSplitter3]}
        onChange={handleChange}
        language={Blockly.JavaScript}
        appearance={{
          categories: {
            Claro: {
              colour: "270",
            },
          },
        }}
      ></BlocklyDrawer>
      <button
        className="button"
        onClick={() => {
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
