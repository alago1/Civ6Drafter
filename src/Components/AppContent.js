import React, { Suspense } from "react";
import CharacterPanel from "./CharacterPanel";
import RandomSelector from "./RandomSelector";
import PulseLoader from "react-spinners/PulseLoader";

const HexGrid = React.lazy(() => import("./HexGrid"));

function AppContent() {
  return (
    <div className="app-content">
      <Suspense fallback={<PulseLoader loading={true} color={"#ffffff"} />}>
        <HexGrid />
      </Suspense>
      <CharacterPanel />
      <RandomSelector />
    </div>
  );
}

export default AppContent;
