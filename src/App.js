import "./App.css";
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category } from "react-blockly-drawer";
import helloWorld from "./blocks/helloWorld";
import claroTap from "./blocks/claroTap";
import claroWire from "./blocks/claroWire";
import claroTerminal from "./blocks/claroTerminal";

function App() {
  return (
    <div className="App">
      <BlocklyDrawer
        tools={[helloWorld, claroTap, claroWire, claroTerminal]}
        onChange={(code, workspace) => {
          console.log(code, workspace);
        }}
        language={Blockly.JavaScript}
        appearance={{
          categories: {
            Demo: {
              colour: "270",
            },
          },
        }}
      >
        <Category name="Variables" custom="VARIABLE" />
        <Category name="Values">
          <Block type="math_number" />
          <Block type="text" />
        </Category>
      </BlocklyDrawer>
    </div>
  );
}

export default App;
