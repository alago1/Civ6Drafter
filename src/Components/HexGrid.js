import React, { Fragment } from "react";
import { GenerateHexGridList } from "../util/HexGridList";
import { useWindowDimensions } from "../hooks";

function HexGrid() {
  const hexGrid = GenerateHexGridList();

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
  const n_rows = Math.ceil(hexGrid.length / cells_per_row) + 1; //minimun number of rows given cells_per_row

  return (
    <div className="hex-grid">
      {[...Array(n_rows).keys()].map((row_index) => {
        //number of hex cells already plotted
        let cells_passed =
          row_index % 2 === 0
            ? (2 * cells_per_row - 1) * Math.floor(row_index / 2)
            : (2 * cells_per_row - 1) * Math.floor((row_index - 1) / 2) +
              cells_per_row -
              1;

        //number of cells in row to be plotted
        let n_cells_this_row =
          row_index % 2 === 1 ? cells_per_row : cells_per_row - 1;

        let shouldCorrectMargin =
          hexGrid.length - cells_passed - n_cells_this_row <= 0 && //checks if its the last row
          (n_cells_this_row + 1) % 2 === (hexGrid.length - cells_passed) % 2; //if its the last row, checks if number of remaining cells has equal parity to previous row

        return (
          <div
            className={`row ${shouldCorrectMargin ? "shift-last-row" : ""}`}
            key={row_index}
          >
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
