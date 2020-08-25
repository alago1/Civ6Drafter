import React, { useState, useContext } from "react";
import { useObserver } from "mobx-react";
import PageModal from "../PageModal";
import { StoreContext } from "../../Store";
import DraftSetupModal from "./Modals/DraftSetupModal";
import DraftResultsModal from "./Modals/DraftResultsModal";

function RandomSelector() {
  const store = useContext(StoreContext);

  //related to modal
  const [modalIsOpen, setIsOpen] = useState(false);

  //handler that updates state variables before closing modal
  const closeModal = () => {
    setIsOpen(false);
    if (!store.draftModalState) {
      if (store.playerCivs.length !== 0)
        store.selectedPlayers = document.getElementById("selected-names").value;
      if (store.remainingCivs.length !== 0)
        store.draftedPlayers = document.getElementById("draft-names").value;
    }
    store.draftModalState = false;
  };

  return useObserver(() => (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="modal-button random-draft-button"
        style={{ width: "200px" }}
      >
        Random Draft
      </button>
      <PageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        contentLabel="Random Draft Panel"
        forceLargeView
      >
        {!store.draftModalState ? (
          <DraftSetupModal className="random-draft-modal-content" />
        ) : (
          <DraftResultsModal className="random-draft-modal-content" />
        )}
      </PageModal>
    </div>
  ));
}

export default RandomSelector;
