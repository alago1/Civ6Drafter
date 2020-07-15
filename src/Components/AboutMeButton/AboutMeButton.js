import React from "react";
import ProfilePic from "./prof_pic_200x200.JPG";
import styles from "./AboutMeButton.module.css";

function AboutMeButton(props) {
  const dimensions = {
    width: typeof props.scale === "number" ? `${220 * props.scale}px` : "220px",
    height: typeof props.scale === "number" ? `${80 * props.scale}px` : "80px",
  };

  const fontSize =
    typeof props.scale === "number" ? `${25 * props.scale}px` : "25px";

  return (
    <div className={props.className}>
      <div
        className={styles["button-wrapper"]}
        onClick={props.onClick}
        style={{ ...dimensions, ...props.style }}
      >
        <h3
          className={styles["button-text"]}
          onClick={props.onClick}
          style={{ fontSize: fontSize }}
        >
          About Me
        </h3>
        <div className={styles["profile-pic-wrapper"]}>
          <img
            src={ProfilePic}
            alt=""
            className={styles["profile-pic"]}
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMeButton;
