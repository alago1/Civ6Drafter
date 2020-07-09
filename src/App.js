import React from "react";
import Hexagon from "react-hexagon";
import civs from "./civilizations.json";
import "./App.css";

function App() {
  const cells_per_row = 10;
  const n_rows = 3;

  const parseCivInfo = (civ) => {
    let civInfo = civ;
    for (let param of Object.keys(civInfo)) {
      if (civInfo[param] === "") {
        civInfo[param] = civs.default[param];
      }
    }
    return civInfo;
  };

  const hexGrid = Object.keys(civs).map((elem, index) => {
    if (elem === "default") return <></>;

    let civInfo = parseCivInfo(civs[elem]);
    return (
      <Hexagon
        key={Object.keys(civs)[index + 1]}
        className="hex"
        backgroundImage={civInfo.portrait}
        backgroundScale={1.03}
        onClick={() => console.log(civInfo)}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        {[...Array(n_rows).keys()].map((row_index) => (
          <div className="row">
            {[...Array(cells_per_row).keys()].map(
              (col_index) => hexGrid[cells_per_row * row_index + col_index]
            )}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
