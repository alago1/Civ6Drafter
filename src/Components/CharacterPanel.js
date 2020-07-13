import React from "react";
import {
  selectedCivilization,
  playerCivilizations,
  bannedCivilizations,
  modalState,
} from "../atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import Modal from "react-modal";

Modal.setAppElement("#root");
function CharacterPanel() {
  const selectedInfo = useRecoilValue(selectedCivilization);
  const [playerCivs, setPlayerCivs] = useRecoilState(playerCivilizations);
  const [bannedCivs, setBannedCivs] = useRecoilState(bannedCivilizations);
  const [modalIsOpen, setIsOpen] = useRecoilState(modalState);

  //handle to make it easier to read
  const closeModal = () => setIsOpen(false);

  const banSeletedCiv = () => {
    setBannedCivs(bannedCivs.add(selectedInfo.name));
    closeModal();
  };

  const unbanSelectedCiv = () => {
    bannedCivs.delete(selectedInfo.name);
    setBannedCivs(bannedCivs);
    closeModal();
  };

  const playerSelectCiv = () => {
    setPlayerCivs(playerCivs.add(selectedInfo.name));
    closeModal();
  };

  const playerUnselectCiv = () => {
    playerCivs.delete(selectedInfo.name);
    setPlayerCivs(playerCivs);
    closeModal();
  };

  const getSelectedCivDescription = () => {
    const isEmptyObject = (obj) => {
      return (
        typeof obj === "object" &&
        Object.keys(obj).length === 0 &&
        obj.constructor === Object
      );
    };

    let fullDescription = [];

    const genDescriptionByKey = (key) => {
      const key_desc = [];
      if (isEmptyObject(selectedInfo)) return [];

      if (!isEmptyObject(selectedInfo[key])) {
        Object.keys(selectedInfo[key]).forEach((param, index) => {
          key_desc.push(
            <li
              key={`${selectedInfo.nation}-${selectedInfo.leader}-${key}-${index}`}
              className="description-li"
            >
              <strong>{param}: </strong>
              <span className="modal-description-span">
                {typeof selectedInfo[key][param] === "object" && (
                  <img
                    src={selectedInfo[key][param].image}
                    alt=""
                    className="description-icon"
                  />
                )}
                {typeof selectedInfo[key][param] === "object"
                  ? selectedInfo[key][param].description
                  : selectedInfo[key][param]}
              </span>
            </li>
          );
        });
      }
      return key_desc;
    };

    fullDescription.push(
      <div>
        <h3>Leader Features and Abilities</h3>
        <ul>{genDescriptionByKey("leader-description")}</ul>
      </div>,
      <div>
        <h3>Civilization Features and Abilities</h3>
        <ul>{genDescriptionByKey("civ-description")}</ul>
      </div>
    );

    const dlc_modifiers = genDescriptionByKey("dlc-modifiers");
    if (dlc_modifiers.length !== 0) {
      fullDescription.push(
        <div>
          <h3>DLC Modifiers</h3>
          <ul>{dlc_modifiers}</ul>
        </div>
      );
    }

    return fullDescription;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },

        content: {
          top: "20%",
          left: "20%",
          right: "20%",
          bottom: "20%",
          backgroundColor: "#222831",
          border: "3px solid #121212",
          borderRadius: "50px",
        },
      }}
      contentLabel="character-info-modal"
    >
      <button onClick={closeModal} className="modal-close-button">
        {/* styled x-symbol */}
        &#10006;
      </button>
      <div className="modal-content">
        <div className="modal-portrait">
          <img
            src={selectedInfo.portrait}
            alt=""
            className={`modal-selected-portrait ${
              bannedCivs.has(selectedInfo.name) ||
              playerCivs.has(selectedInfo.name)
                ? "grayscale"
                : ""
            }`}
          />
          <img src={selectedInfo.flag} alt="" className="modal-selected-flag" />
          <br />
          <br />
          <a
            href={selectedInfo.wiki}
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
            onClick={
              bannedCivs.has(selectedInfo.name)
                ? unbanSelectedCiv
                : banSeletedCiv
            }
            disabled={playerCivs.has(selectedInfo.name)}
          >
            {bannedCivs.has(selectedInfo.name) ? "Unban" : "Ban"}
          </button>
          <button
            className="modal-button select-button"
            onClick={
              playerCivs.has(selectedInfo.name)
                ? playerUnselectCiv
                : playerSelectCiv
            }
            disabled={bannedCivs.has(selectedInfo.name)}
          >
            {playerCivs.has(selectedInfo.name) ? "Deselect" : "Select"}
          </button>
        </div>
        <div className="modal-description">
          <h1 className="modal-title">{`${selectedInfo.name} of ${selectedInfo.nation}`}</h1>
          <div className="modal-description-box">
            {getSelectedCivDescription()}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CharacterPanel;
