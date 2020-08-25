import React, { useRef, useEffect, useState } from "react";
import NameTag from "./NameTag";
import module_styles from "./NameTagTextArea.module.css";
import { useCallback } from "react";

function NameTagTextArea(props) {
  const [nameTags, setNameTags] = useState(
    typeof props.defaultValue !== "undefined" ? props.defaultValue : new Set()
  );
  const textAreaRef = useRef();

  useEffect(() => {
    if (props.onTagChange) {
      props.onTagChange(nameTags);
    }
  }, [nameTags, props]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (e.target.value !== "") {
          const newNameTags = new Set(nameTags);
          newNameTags.add(e.target.value);
          setNameTags(newNameTags);

          //   console.log(`added tag: ${e.target.value}`);
          e.target.value = "";
        }

        e.preventDefault();
      }
    },
    [nameTags]
  );

  const onCloseTag = (tagName) => {
    const newNameTags = new Set(nameTags);
    newNameTags.delete(tagName);
    setNameTags(newNameTags);

    // console.log(`removed tag: ${tagName}`);
  };

  useEffect(() => {
    const textArea = textAreaRef.current;

    textArea.addEventListener("keypress", handleKeyPress);

    return () => textArea.removeEventListener("keypress", handleKeyPress);
  }, [textAreaRef, handleKeyPress]);

  const shouldDisplayTextArea =
    typeof props.maxNumberOfTags === "undefined" ||
    nameTags.size < props.maxNumberOfTags;

  return (
    <div
      className={module_styles["name-tag-text-area-container"]}
      onClick={() => textAreaRef.current.focus()}
    >
      {Array.from(nameTags).map((elem, index) => (
        <NameTag tagName={elem} onClose={onCloseTag} key={index} />
      ))}
      <textarea
        rows="1"
        ref={textAreaRef}
        className={module_styles["name-tag-text-area"]}
        placeholder={nameTags.size === 0 ? props.placeholder : ""}
        disabled={!shouldDisplayTextArea}
        style={{
          display: shouldDisplayTextArea ? "block" : "none",
        }}
      />
    </div>
  );
}

export default NameTagTextArea;
