import React from "react";
import Hexagon from "react-hexagon";

function HexagonContainer(props) {
  return (
    <div className={props.className}>
      <img
        src={props.flag}
        alt=""
        className="hex-flag"
        onClick={props.onClick}
      />
      <span
        className="checkmark-symbol"
        style={{
          visibility: props.showCheckmark ? "visible" : "hidden",
        }}
        onClick={props.onClick}
      >
        &#10004;
      </span>
      <Hexagon
        backgroundImage={props.backgroundImage}
        backgroundScale={1.03}
        className={props.applyGrayscaleFilter ? "grayscale" : ""}
        onClick={props.onClick}
      />
    </div>
  );
}

// export default React.memo(HexagonContainer);
export default HexagonContainer;
