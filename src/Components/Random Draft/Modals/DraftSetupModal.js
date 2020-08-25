import React, { useContext } from "react";
import { StoreContext } from "../../../Store";

function DraftSetupModal(props) {
  const store = useContext(StoreContext);

  return (
    <div className={props.className}>
      <h1 className="modal-title-text">Random Draft Setup</h1>
      {store.playerCivs.length !== 0 && (
        <div className="random-draft-selected-civs">
          <h2 style={{ marginBottom: "5px" }}>Selected Civilizations</h2>
          <h3 style={{ margin: "0px", marginLeft: "10px" }}>
            The following civilizations have been selected before the draft.
            Please enter the names of the players (one player per line) who will
            take them in order.
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
            {store.playerCivs
              .map((elem) => `${elem.name} of ${elem.nation}`)
              .join(", ")}
          </h3>
          <textarea
            id="selected-names"
            name="selected-names"
            cols="1"
            rows={Math.min(6, store.playerCivs.length)}
            className="selected-names"
            defaultValue={store.selectedPlayers}
          />
        </div>
      )}
      <div className="random-draft-draft">
        <h2 style={{ marginBottom: "5px" }}>Draft</h2>
        <h3 style={{ margin: "0px 0px 20px 10px" }}>
          Civilizations neither banned nor selected will be used in the draft.
          Please enter the names of the players (one player per line) who will
          take part in the draft.
        </h3>
        <textarea
          id="draft-names"
          name="draft-names"
          cols="1"
          rows={Math.min(6, store.remainingCivs.length)}
          className="selected-names"
          defaultValue={store.draftedPlayers}
        />
      </div>
      <button
        onClick={() => store.runDraft(false)}
        className="modal-button run-draft-button"
      >
        Run Draft
      </button>
    </div>
  );
}

export default DraftSetupModal;
