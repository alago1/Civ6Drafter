import React from "react";
import HexGrid from "./Components/HexGrid";
import CharacterPanel from "./Components/CharacterPanel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HexGrid />
      <CharacterPanel />
    </div>
  );
}

export default App;
