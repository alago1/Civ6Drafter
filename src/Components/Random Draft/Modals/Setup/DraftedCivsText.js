import React from "react";
import NameTagTextArea from "../../NameTagTextArea/NameTagTextArea";

function RemainingCivsText(props) {
  const maxNames = props.remainingCivs.length;

  return (
    <div className="random-draft-draft">
      <h2 style={{ marginBottom: "5px" }}>Draft</h2>
      <h3 style={{ margin: "0px 0px 20px 10px" }}>
        Civilizations neither banned nor selected will be used in the draft.
        Please enter the names of the players (press enter to add player) who
        will take part in the draft.
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

export default RemainingCivsText;
