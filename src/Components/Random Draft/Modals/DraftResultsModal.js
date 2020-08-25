import React, { useContext } from "react";
import { StoreContext } from "../../../Store";
import { useObserver } from "mobx-react";
import DraftResultCard from "../DraftResultCard";

function DraftResultsModal(props) {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <div className={props.className}>
      <h1 className="modal-title-text">Random Draft Results</h1>
      <div className="random-draft-cards-list">
        {store.draftResults.map((draftRes) => {
          return (
            <DraftResultCard
              className="random-draft-result-card"
              player={draftRes.player}
              civilization={draftRes.civilization}
              key={`${draftRes.civilization.id}-draft-result-card`}
            />
          );
        })}
        <button
          onClick={() => store.runDraft(true)}
          className="modal-button run-draft-button"
        >
          Reroll
        </button>
      </div>
    </div>
  ));
}

export default DraftResultsModal;
