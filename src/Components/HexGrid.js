import React, { Fragment } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalState,
  selectedCivilization,
  playerCivilizations,
  bannedCivilizations,
} from "../atoms";
import Hexagon from "react-hexagon";
import civs from "../civilizations.json";

function HexGrid() {
  //setter only, does not subscribe to atom
  const setIsOpen = useSetRecoilState(modalState);
  const setSelectedInfo = useSetRecoilState(selectedCivilization);

  //atom subscriptions
  const playerCivs = useRecoilValue(playerCivilizations);
  const bannedCivs = useRecoilValue(bannedCivilizations);

  //grid setup
  const cells_per_row = 8;
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

  const openModal = (new_selection_info) => {
    setIsOpen(true);
    setSelectedInfo(parseCivInfo(new_selection_info));
  };

  const hexGrid = Object.keys(civs).map((elem, index) => {
    if (elem === "default") return <></>;

    let civInfo = parseCivInfo(civs[elem]);
    return (
      <div className="hex" key={`hexagon-div-${index}`}>
        <img
          src={civInfo.flag}
          alt=""
          className="hex-flag"
          onClick={() => openModal(civInfo)}
        />
        {/* <span
          className="banned-symbol"
          style={{
            visibility: bannedCivs.has(`${civInfo.name} of ${civInfo.nation}`) ? "visible" : "hidden",
          }}
          onClick={() => openModal(civInfo)}
        >
          &#10006;
        </span> */}
        <span
          className="checkmark-symbol"
          style={{
            visibility: playerCivs.has(`${civInfo.name} of ${civInfo.nation}`)
              ? "visible"
              : "hidden",
          }}
          onClick={() => openModal(civInfo)}
        >
          &#10004;
        </span>
        <Hexagon
          key={`hexagon-${index}`}
          backgroundImage={civInfo.portrait}
          backgroundScale={1.03}
          className={
            bannedCivs.has(`${civInfo.name} of ${civInfo.nation}`) ||
            playerCivs.has(`${civInfo.name} of ${civInfo.nation}`)
              ? "grayscale"
              : ""
          }
          onClick={() => openModal(civInfo)}
        />
      </div>
    );
  });

  return (
    <div className="hex-grid">
      {[...Array(n_rows).keys()].map((row_index) => (
        <div className="row" key={row_index}>
          {[...Array(cells_per_row).keys()].map((col_index) => (
            <Fragment key={`${row_index}-${col_index}`}>
              {hexGrid[cells_per_row * row_index + col_index]}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HexGrid;
