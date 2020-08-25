import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import PageModal from "./PageModal";
import { StoreContext } from "../Store";
import { useWindowDimensions } from "../hooks";
import { generateCivDescription } from "../util/generateCivDescription";

function CharacterPanel() {
  const store = useContext(StoreContext);

  //handle to make it easier to read
  const closeModal = () => {
    store.characterModalState = false;
  };

  //updates with windowDimensions
  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowDimensions();

  return useObserver(() => (
    <PageModal
      isOpen={store.characterModalState}
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      contentLabel="Character Panel"
    >
      {typeof store.civs[store.selectedCivId] !== "undefined" && (
        <div className="modal-content">
          <div className="modal-portrait">
            <div className="portrait-icon">
              <img
                src={store.selectedCiv.portrait}
                alt=""
                className={`modal-selected-portrait ${
                  store.selectedCivStatus ? "grayscale" : ""
                }`}
              />
              <img
                src={store.selectedCiv.flag}
                alt=""
                className="modal-selected-flag"
              />
            </div>
            <a
              href={store.selectedCiv.wiki}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-wiki-link"
            >
              <img
                src="https://img.icons8.com/metro/26/000000/external-link.png"
                alt=""
                className="modal-link-img"
              />
              Wiki Page
            </a>
            <button
              className="modal-button ban-button"
              onClick={() => {
                if (store.selectedCiv.status === "banned") {
                  store.civs[store.selectedCivId].status = null;
                } else {
                  store.civs[store.selectedCivId].status = "banned";
                  closeModal();
                }
              }}
              disabled={!["banned", null].includes(store.selectedCiv.status)}
            >
              {store.selectedCiv.status === "banned" ? "Unban" : "Ban"}
            </button>
            <button
              className="modal-button select-button"
              onClick={() => {
                if (store.selectedCiv.status === "player") {
                  store.civs[store.selectedCivId].status = null;
                } else {
                  store.civs[store.selectedCivId].status = "player";
                  closeModal();
                }
              }}
              disabled={!["player", null].includes(store.selectedCiv.status)}
            >
              {store.selectedCiv.status === "player" ? "Deselect" : "Select"}
            </button>
          </div>
          <div className="modal-description">
            <h1 className="modal-title">{`${store.selectedCiv.name} of ${store.selectedCiv.nation}`}</h1>
            <div className="modal-description-box">
              {generateCivDescription(store.selectedCiv)}
            </div>
          </div>
        </div>
      )}
    </PageModal>
  ));
}

export default CharacterPanel;
