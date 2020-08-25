import React, { Suspense } from "react";
import HexGridButtons from "./Grid/GridButtons/HexGridButtons";
import CharacterPanel from "./CharacterPanel";
import RandomSelector from "./Random Draft/RandomSelector";
import PulseLoader from "react-spinners/PulseLoader";

const HexGrid = React.lazy(() => import("./Grid/HexGrid"));

function AppContent() {
  return (
    <div className="app-content">
      <HexGridButtons />
      <Suspense fallback={<PulseLoader loading={true} color={"#ffffff"} />}>
        <HexGrid />
      </Suspense>
      <CharacterPanel />
      <RandomSelector />
    </div>
  );
}

export default AppContent;
