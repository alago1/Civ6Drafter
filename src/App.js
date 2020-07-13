import React, { useState } from "react";
import Hexagon from "react-hexagon";
import Modal from "react-modal";
import civs from "./civilizations.json";
import "./App.css";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [bannedCivs, setBannedCivs] = useState(new Set());

  const openModal = (new_selection_info) => {
    setIsOpen(true);
    setSelectedInfo(parseCivInfo(new_selection_info));
  };
  const closeModal = () => setIsOpen(false);

  //grid
  const cells_per_row = 10;
  const n_rows = 3;

  const parseCivInfo = (civ) => {
    let civInfo = civ;
    for (let param of Object.keys(civInfo)) {
      if (civInfo[param] === "") {
        civInfo[param] = civs.default[param];
      }
    }
    return civInfo;
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

  const banSeletedCiv = () => {
    setBannedCivs(bannedCivs.add(selectedInfo.name));
    closeModal();
  };

  const unbanSelectedCiv = () => {
    bannedCivs.delete(selectedInfo.name);
    setBannedCivs(bannedCivs);
    closeModal();
  };

  const hexGrid = Object.keys(civs).map((elem, index) => {
    if (elem === "default") return <></>;

    let civInfo = parseCivInfo(civs[elem]);
    return (
      <div className="hex">
        <img
          src={civInfo.flag}
          alt=""
          className="hex-flag"
          onClick={() => openModal(civInfo)}
        />
        <Hexagon
          key={Object.keys(civs)[index + 1]}
          backgroundImage={civInfo.portrait}
          backgroundScale={1.03}
          className={bannedCivs.has(civInfo.name) ? "banned" : ""}
          onClick={() => openModal(civInfo)}
        />
      </div>
    );
  });

  return (
    <div className="App">
      <div className="hex-grid">
        {[...Array(n_rows).keys()].map((row_index) => (
          <div className="row" key={row_index}>
            {[...Array(cells_per_row).keys()].map(
              (col_index) => hexGrid[cells_per_row * row_index + col_index]
            )}
          </div>
        ))}
      </div>
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
                bannedCivs.has(selectedInfo.name) ? "banned" : ""
              }`}
            />
            <img
              src={selectedInfo.flag}
              alt=""
              className="modal-selected-flag"
            />
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
            >
              {bannedCivs.has(selectedInfo.name) ? "Unban" : "Ban"}
            </button>
            <button className="modal-button select-button" onClick={closeModal}>
              Select
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
    </div>
  );
}

export default App;
