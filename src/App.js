import React, { useState } from "react";
import Hexagon from "react-hexagon";
import Modal from "react-modal";
import civs from "./civilizations.json";
import "./App.css";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});

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

  const hexGrid = Object.keys(civs).map((elem, index) => {
    if (elem === "default") return <></>;

    let civInfo = parseCivInfo(civs[elem]);
    return (
      <div className="hex">
        <img src={civInfo.flag} alt="" className="hex-flag" />
        <Hexagon
          key={Object.keys(civs)[index + 1]}
          backgroundImage={civInfo.portrait}
          backgroundScale={1.03}
          onClick={() => {
            console.log(civInfo);
            openModal(civInfo);
          }}
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
              className="modal-selected-portrait"
            />
            <img
              src={selectedInfo.flag}
              alt=""
              className="modal-selected-flag"
            />
          </div>
          <div className="modal-description">
            <h1 className="modal-title">{`${selectedInfo.name} of ${selectedInfo.nation}`}</h1>
            <p>This nation is ass. get another one if you trying to win.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
