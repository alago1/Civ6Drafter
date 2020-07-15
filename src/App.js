import React from "react";
import AboutMe from "./Components/AboutMe";
import HexGrid from "./Components/HexGrid";
import CharacterPanel from "./Components/CharacterPanel";
import RandomSelector from "./Components/RandomSelector";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <div className="app-content">
        <HexGrid />
        <CharacterPanel />
        <RandomSelector />
      </div>
    </div>
  );
}

export default App;
