import React from "react";
import Modal from "react-modal";
import { useWindowDimensions } from "../hooks";

Modal.setAppElement("#root");
function CharacterPanel(props) {
  const selectedInfo = props.selectedCivInfo;
  const [playerCivs, setPlayerCivs] = [props.playerCivs, props.setPlayerCivs];
  const [bannedCivs, setBannedCivs] = [props.bannedCivs, props.setBannedCivs];
  //handle
  const [modalIsOpen, setIsOpen] = [props.modalState, props.setModalState];

  //handle to make it easier to read
  const closeModal = () => setIsOpen(false);

  //updates with windowDimensions
  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowDimensions();

  const banSeletedCiv = () => {
    setBannedCivs((bans) => {
      const new_bans = new Set(bans);
      new_bans.add(`${selectedInfo.name} of ${selectedInfo.nation}`);
      return new_bans;
    });
    closeModal();
  };

  const unbanSelectedCiv = () => {
    setBannedCivs((bans) => {
      const new_bans = new Set(bans);
      new_bans.delete(`${selectedInfo.name} of ${selectedInfo.nation}`);
      return new_bans;
    });
  };

  const playerSelectCiv = () => {
    setPlayerCivs((playerSelectedCivs) => {
      const new_playerCivs = new Set(playerSelectedCivs);
      new_playerCivs.add(`${selectedInfo.name} of ${selectedInfo.nation}`);
      return new_playerCivs;
    });
    closeModal();
  };

  const playerUnselectCiv = () => {
    setPlayerCivs((playerSelectedCivs) => {
      const new_playerCivs = new Set(playerSelectedCivs);
      new_playerCivs.delete(`${selectedInfo.name} of ${selectedInfo.nation}`);
      return new_playerCivs;
    });
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
      <div key={`leader-features`}>
        <h3>Leader Features and Abilities</h3>
        <ul>{genDescriptionByKey("leader-description")}</ul>
      </div>,
      <div key={`civilization-features`}>
        <h3>Civilization Features and Abilities</h3>
        <ul>{genDescriptionByKey("civ-description")}</ul>
      </div>
    );

    const dlc_modifiers = genDescriptionByKey("dlc-modifiers");
    if (dlc_modifiers.length !== 0) {
      fullDescription.push(
        <div key="dlc_modifiers">
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
          top: windowWidth > 768 ? "20%" : "10%",
          left: windowWidth > 768 ? "20%" : "10%",
          right: windowWidth > 768 ? "20%" : "10%",
          bottom: windowWidth > 768 ? "20%" : "10%",
          backgroundColor: "#222831",
          border: "3px solid #121212",
          borderRadius: "50px",
        },
      }}
      contentLabel="Character Panel"
    >
      <button onClick={closeModal} className="modal-close-button">
        {/* styled x-symbol */}
        &#10006;
      </button>
      <div className="modal-content">
        <div className="modal-portrait">
          <div className="portrait-icon">
            <img
              src={selectedInfo.portrait}
              alt=""
              className={`modal-selected-portrait ${
                bannedCivs.has(
                  `${selectedInfo.name} of ${selectedInfo.nation}`
                ) ||
                playerCivs.has(`${selectedInfo.name} of ${selectedInfo.nation}`)
                  ? "grayscale"
                  : ""
              }`}
            />
            <img
              src={selectedInfo.flag}
              alt=""
              className="modal-selected-flag"
            />
          </div>
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
              bannedCivs.has(`${selectedInfo.name} of ${selectedInfo.nation}`)
                ? unbanSelectedCiv
                : banSeletedCiv
            }
            disabled={playerCivs.has(
              `${selectedInfo.name} of ${selectedInfo.nation}`
            )}
          >
            {bannedCivs.has(`${selectedInfo.name} of ${selectedInfo.nation}`)
              ? "Unban"
              : "Ban"}
          </button>
          <button
            className="modal-button select-button"
            onClick={
              playerCivs.has(`${selectedInfo.name} of ${selectedInfo.nation}`)
                ? playerUnselectCiv
                : playerSelectCiv
            }
            disabled={bannedCivs.has(
              `${selectedInfo.name} of ${selectedInfo.nation}`
            )}
          >
            {playerCivs.has(`${selectedInfo.name} of ${selectedInfo.nation}`)
              ? "Deselect"
              : "Select"}
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
