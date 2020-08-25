import React, { useState } from "react";
import module_styles from "./Tag.module.css";

function Tag(props) {
  const [isChecked, setChecked] = useState(props.initialState);

  const handleClick = (e) => {
    props.onClick(props.value);
    setChecked(!isChecked);
  };

  return (
    <span
      className={`${module_styles["tag-container"]} ${
        !isChecked ? module_styles["strike-text"] : ""
      }`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        onChange={() => setChecked(!isChecked)}
        value={props.value}
        checked={isChecked}
        className={module_styles["tag-input"]}
      />
      {props.text}
    </span>
  );
}

export default Tag;
