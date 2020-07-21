import React, { useState } from "react";
import HexGrid from "./HexGrid";
import CharacterPanel from "./CharacterPanel";
import RandomSelector from "./RandomSelector";

function AppContent() {
  const [selectedCiv, setSelectedCiv] = useState({}); //civilization whose characterPanel would show the information of
  const [playerCivs, setPlayerCivs] = useState(new Set()); //civilizations who have been marked as selected
  const [bannedCivs, setBannedCivs] = useState(new Set()); //civilizations who have been marked as banned from the draft
  const [modalState, setModalState] = useState(false); //wheter the characterPanel should be showing

  return (
    <div className="app-content">
      <HexGrid
        setModalState={setModalState}
        setSelectedCivInfo={setSelectedCiv}
        playerCivs={playerCivs}
        bannedCivs={bannedCivs}
      />
      <CharacterPanel
        modalState={modalState}
        setModalState={setModalState}
        selectedCivInfo={selectedCiv}
        playerCivs={playerCivs}
        setPlayerCivs={setPlayerCivs}
        bannedCivs={bannedCivs}
        setBannedCivs={setBannedCivs}
      />
      <RandomSelector playerCivs={playerCivs} bannedCivs={bannedCivs} />
    </div>
  );
}

export default AppContent;
