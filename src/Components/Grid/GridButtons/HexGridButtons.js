import React from "react";
import FilterGridButton from "./FilterButton/FilterGridButton";
import module_styles from "./HexGridButtons.module.css";

function HexGridButtons() {
  return (
    <div className={module_styles["hex-grid-buttons"]}>
      <FilterGridButton />
    </div>
  );
}

export default HexGridButtons;
