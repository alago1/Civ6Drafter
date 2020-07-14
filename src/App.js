import React from "react";
import HexGrid from "./Components/HexGrid";
import CharacterPanel from "./Components/CharacterPanel";
import RandomSelector from "./Components/RandomSelector";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HexGrid />
      <CharacterPanel />
      <RandomSelector />
    </div>
  );
}

export default App;
