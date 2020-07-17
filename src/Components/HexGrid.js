import React, { Fragment } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalState,
  selectedCivilization,
  playerCivilizations,
  bannedCivilizations,
} from "../atoms";
import Hexagon from "react-hexagon";
import { useWindowDimensions } from "../hooks";
import civs from "../civilizations.json";

function HexGrid() {
  //setter only, does not subscribe to atom
  const setIsOpen = useSetRecoilState(modalState);
  const setSelectedInfo = useSetRecoilState(selectedCivilization);

  //atom subscriptions
  const playerCivs = useRecoilValue(playerCivilizations);
  const bannedCivs = useRecoilValue(bannedCivilizations);

  const parseCivInfo = (civ) => {
    let civInfo = civ;
    for (let param of Object.keys(civInfo)) {
      if (civInfo[param] === "") {
        civInfo[param] = civs.default[param];
      }
    }
    return civInfo;
  };

  const hexGrid = Object.keys(civs)
    .filter((elem) => elem !== "default")
    .map((elem, index) => {
      let civInfo = parseCivInfo(civs[elem]);
      return (
        <div className="hex" key={`hexagon-div-${civs[elem].name}`}>
          <img
            src={civInfo.flag}
            alt=""
            className="hex-flag"
            onClick={() => openModal(civInfo)}
          />
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

  //grid setup
  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowDimensions();

  const getCellsPerRow = () => {
    if (windowWidth < 400) {
      return 3;
    } else if (windowWidth < 530) {
      return 4;
    } else if (windowWidth < 635) {
      return 5;
    } else if (windowWidth < 1100) {
      return 6;
    } else if (windowWidth < 1250) {
      return 7;
    } else {
      return 8;
    }
  };

  const cells_per_row = getCellsPerRow();
  const n_rows =
    Math.ceil(hexGrid.length / cells_per_row) + //minimun number of rows given cells_per_row
    (hexGrid.length % cells_per_row === 0 ? 1 : 0); // when total number of cells is divisible by cells_per_row, needs to add another row

  const openModal = (new_selection_info) => {
    setIsOpen(true);
    setSelectedInfo(parseCivInfo(new_selection_info));
  };

  return (
    <div className="hex-grid">
      {[...Array(n_rows).keys()].map((row_index) => {
        let cells_passed =
          row_index % 2 === 0
            ? (2 * cells_per_row - 1) * Math.floor(row_index / 2)
            : (2 * cells_per_row - 1) * Math.floor((row_index - 1) / 2) +
              cells_per_row -
              1;
        let n_cells_this_row =
          row_index % 2 ? cells_per_row : cells_per_row - 1;

        // console.log(`row-${row_index}: ${n_cells_this_row}`);
        // console.log(
        //   hexGrid.slice(cells_passed, cells_passed + n_cells_this_row)
        // );
        return (
          <div className="row" key={row_index}>
            {[...Array(n_cells_this_row).keys()].map((col_index) => {
              return (
                <Fragment key={`${row_index}-${col_index}`}>
                  {/* backwards here (then reversed in the stylesheet) because I want flags above to go over hexagons below it */}
                  {hexGrid[hexGrid.length - 1 - (cells_passed + col_index)]}
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default HexGrid;
