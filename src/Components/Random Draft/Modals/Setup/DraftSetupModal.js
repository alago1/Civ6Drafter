import React, { useContext } from "react";
import { StoreContext } from "../../../../Store";
import { useObserver } from "mobx-react";
import SelectedCivsText from "./SelectedCivsText";
import DraftedCivsText from "./DraftedCivsText";

function DraftSetupModal(props) {
  const store = useContext(StoreContext);

  const startSelectedPlayers = new Set(store.selectedPlayers);
  const startDraftedPlayers = new Set(store.draftedPlayers);

  return useObserver(() => (
    <div className={props.className}>
      <h1 className="modal-title-text">Random Draft Setup</h1>
      {store.playerCivs.length !== 0 && (
        <SelectedCivsText
          playerCivs={store.playerCivs}
          defaultValue={startSelectedPlayers}
          onTagChange={store.updateSelectedPlayers}
        />
      )}
      {store.remainingCivs.length !== 0 && (
        <DraftedCivsText
          remainingCivs={store.remainingCivs}
          defaultValue={startDraftedPlayers}
          onTagChange={store.updateDraftedPlayers}
        />
      )}
      <button
        onClick={store.runDraft}
        className="modal-button run-draft-button"
        disabled={
          store.playerCivs.length === 0 && store.remainingCivs.length === 0
        }
      >
        Run Draft
      </button>
    </div>
  ));
}

export default DraftSetupModal;
