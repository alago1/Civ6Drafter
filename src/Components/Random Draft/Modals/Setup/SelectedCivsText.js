import React from "react";
import NameTagTextArea from "../../NameTagTextArea/NameTagTextArea";

function SelectedCivsText(props) {
  const maxNames = props.playerCivs.length;

  return (
    <div className="random-draft-selected-civs">
      <h2 style={{ marginBottom: "5px" }}>Selected Civilizations</h2>
      <h3 style={{ margin: "0px", marginLeft: "10px" }}>
        The following civilizations have been selected before the draft. Please
        enter the names of the players (press enter to add player) who will take
        them in order.
        <br />
        <em style={{ fontSize: "1rem" }}>
          (Missing names will be filled with UnnamedPlayer1, UnnamedPlayer2,
          ...etc.)
        </em>
      </h3>
      <h3
        style={{
          margin: "5px",
          textIndent: "20px",
          fontSize: "1.25rem",
        }}
      >
        {props.playerCivs
          .map((elem) => `${elem.name} of ${elem.nation}`)
          .join(", ")}
      </h3>
      <NameTagTextArea
        placeholder={"Players..."}
        defaultValue={props.defaultValue}
        onTagChange={props.onTagChange}
        maxNumberOfTags={maxNames}
      />
    </div>
  );
}

export default SelectedCivsText;
