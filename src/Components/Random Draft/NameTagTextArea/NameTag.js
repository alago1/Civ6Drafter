import React from "react";
import module_styles from "./NameTag.module.css";

function NameTag(props) {
  return (
    <span className={module_styles["name-tag-container"]}>
      {props.tagName}
      <span
        onClick={() => props.onClose(props.tagName)}
        className={module_styles["name-tag-close-button"]}
      >
        {/* styled x-symbol */}
        &#10006;
      </span>
    </span>
  );
}

export default NameTag;
