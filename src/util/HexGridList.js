import React, { useContext } from "react";
import { StoreContext } from "../Store";
import { useObserver } from "mobx-react";
import HexagonContainer from "../Components/HexagonContainer";

export const GenerateHexGridList = () => {
  const store = useContext(StoreContext);
  return useObserver(() =>
    Object.values(store.civs).map((civ) => {
      return (
        <HexagonContainer
          className="hex"
          key={`hexagon-div-${civ.name}`}
          flag={civ.flag}
          showCheckmark={civ.status === "player"}
          applyGrayscaleFilter={civ.status !== null}
          backgroundImage={civ.portrait}
          onClick={() => {
            store.selectedCivId = civ.id;
            store.characterModalState = true;
          }}
        />
      );
    })
  );
};
