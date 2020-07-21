import React, { useState, useMemo } from "react";
import civs from "../civilizations.json";
import Modal from "react-modal";

function RandomSelector(props) {
  const playerCivs = props.playerCivs;
  const bannedCivs = props.bannedCivs;

  const [selectedPlayers, setSelectedPlayers] = useState(""); //string with names of players for selected civs (one name per line)
  const [draftedPlayers, setDraftedPlayers] = useState(""); //string with names of players participating in the draft (one name per line)

  //related to modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalShowResults, setShowResults] = useState(false);

  //results to be displayed in modal
  const [draftResults, setDraftResults] = useState();

  //handler that updates state variables before closing modal
  const closeModal = () => {
    setIsOpen(false);
    if (!modalShowResults && playerCivs.size !== 0)
      setSelectedPlayers(document.getElementById("selected-names").value);
    if (!modalShowResults && remainingCivs.length !== 0)
      setDraftedPlayers(document.getElementById("draft-names").value);
    setShowResults(false);
  };

  const allCivsByName = useMemo(() => {
    return Object.keys(civs)
      .filter((elem) => elem !== "default")
      .map((elem) => `${civs[elem].name} of ${civs[elem].nation}`);
  }, []);

  const civsByLongName = useMemo(() => {
    const parseCivInfo = (civ) => {
      let civInfo = civ;
      for (let param of Object.keys(civInfo)) {
        if (civInfo[param] === "") {
          civInfo[param] = civs.default[param];
        }
      }
      return civInfo;
    };

    let parsedCivByLongName = {};
    Object.keys(civs)
      .filter((elem) => elem !== "default")
      .forEach(
        (elem) =>
          (parsedCivByLongName[
            `${civs[elem].name} of ${civs[elem].nation}`
          ] = parseCivInfo(civs[elem]))
      );
    return parsedCivByLongName;
  }, []);

  // https://github.com/facebookexperimental/Recoil/issues/477
  const remainingCivs = useMemo(() => {
    return allCivsByName.filter(
      (elem) => !(playerCivs.has(elem) || bannedCivs.has(elem))
    );
  }, [allCivsByName, playerCivs, bannedCivs]);

  const sample = (population, k) => {
    //Given a population (array) and k (number <= population.length)
    //returns an array of k elements randomly selected from the population
    //This is Python's implementation of .sample
    //credit to Derek (https://stackoverflow.com/a/45556840/5323429)

    if (!Array.isArray(population))
      throw new TypeError("Population must be an array.");
    var n = population.length;
    if (k < 0 || k > n)
      throw new RangeError("Sample larger than population or is negative");

    var result = new Array(k);
    var setsize = 21; // size of a small set minus size of an empty list

    if (k > 5) setsize += Math.pow(4, Math.ceil(Math.log(k * 3, 4)));

    if (n <= setsize) {
      // An n-length list is smaller than a k-length set
      var pool = population.slice();
      for (var i = 0; i < k; i++) {
        // invariant:  non-selected at [0,n-i)
        var j = (Math.random() * (n - i)) | 0;
        result[i] = pool[j];
        pool[j] = pool[n - i - 1]; // move non-selected item into vacancy
      }
    } else {
      var selected = new Set();
      // eslint-disable-next-line
      for (var i = 0; i < k; i++) {
        // eslint-disable-next-line
        var j = (Math.random() * n) | 0;
        while (selected.has(j)) {
          j = (Math.random() * n) | 0;
        }
        selected.add(j);
        result[i] = population[j];
      }
    }

    return result;
  };

  const runDraft = async (useStoredNames = false) => {
    let draftCompleteResults = [];
    let draftText;
    if (!useStoredNames) {
      draftText = document.getElementById("draft-names").value;
      setDraftedPlayers(draftText);
    } else {
      draftText = draftedPlayers;
    }
    draftText = draftText.split("\n").filter((elem) => elem !== "");

    if (playerCivs.size !== 0) {
      let selectedText;
      if (!useStoredNames) {
        selectedText = document.getElementById("selected-names").value;
      } else {
        selectedText = selectedPlayers;
      }
      selectedText = selectedText.split("\n").filter((elem) => elem !== "");

      if (selectedText.length !== playerCivs.size) {
        let selectedSet = new Set(selectedText);
        let draftSet = new Set(draftText);
        let i = 1;
        let to_be_added = new Set();
        while (selectedText.length + to_be_added.size < playerCivs.size) {
          if (
            !(
              selectedSet.has(`UnnamedPlayer${i}`) ||
              draftSet.has(`UnnamedPlayer${i}`)
            )
          ) {
            to_be_added.add(`UnnamedPlayer${i}`);
          } else {
            i++;
          }
        }
        selectedText = selectedText.concat(Array.from(to_be_added.values()));
      }
      if (!useStoredNames) setSelectedPlayers(selectedText.join("\n"));

      const selectedCivsInterator = playerCivs.values();

      draftCompleteResults = draftCompleteResults.concat(
        selectedText.map((elem) => {
          return {
            player: elem,
            civilization: selectedCivsInterator.next().value,
          };
        })
      );

      // console.log('selected:')
      // console.log(fullSetup)
    }

    let maxNumberOfDrafts = Math.min(draftText.length, remainingCivs.length);

    let draft = sample(remainingCivs, maxNumberOfDrafts);
    draftCompleteResults = draftCompleteResults.concat(
      draftText.slice(0, maxNumberOfDrafts).map((elem, index) => {
        return {
          player: elem,
          civilization: draft[index],
        };
      })
    );

    //Simple report to console
    console.log(draftCompleteResults);

    draftCompleteResults = draftCompleteResults.map((elem) => {
      let civInfo = civsByLongName[elem.civilization];
      return {
        player: elem.player,
        ...civInfo,
      };
    });
    // console.log(fullSetup);
    setDraftResults(draftCompleteResults);
    setShowResults(true);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="modal-button random-draft-button"
        style={{ width: "200px" }}
      >
        Random Draft
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },

          content: {
            top: "10%",
            left: "10%",
            right: "10%",
            bottom: "10%",
            backgroundColor: "#222831",
            border: "3px solid #121212",
            borderRadius: "50px",
          },
        }}
        contentLabel="Random Draft Panel"
      >
        <button onClick={closeModal} className="modal-close-button">
          {/* styled x-symbol */}
          &#10006;
        </button>
        {!modalShowResults && (
          <div className="random-draft-modal-content">
            <h1 style={{ fontSize: "3rem", margin: "0" }}>
              Random Draft Setup
            </h1>
            {playerCivs.size !== 0 && (
              <div className="random-draft-selected-civs">
                <h2 style={{ marginBottom: "5px" }}>Selected Civilizations</h2>
                <h3 style={{ margin: "0px", marginLeft: "10px" }}>
                  The following civilizations have been selected before the
                  draft. Please enter the names of the players (one player per
                  line) who will take them in order.
                  <br />
                  <em style={{ fontSize: "1rem" }}>
                    (Missing names will be filled with UnnamedPlayer1,
                    UnnamedPlayer2, ...etc.)
                  </em>
                </h3>
                <h3
                  style={{
                    margin: "5px",
                    textIndent: "20px",
                    fontSize: "1.25rem",
                  }}
                >
                  {Array.from(playerCivs.values()).join(", ")}
                </h3>
                <textarea
                  id="selected-names"
                  name="selected-names"
                  cols="1"
                  rows={Math.min(6, playerCivs.size)}
                  className="selected-names"
                  defaultValue={selectedPlayers}
                />
              </div>
            )}
            <div className="random-draft-draft">
              <h2 style={{ marginBottom: "5px" }}>Draft</h2>
              <h3 style={{ margin: "0px 0px 20px 10px" }}>
                Civilizations neither banned nor selected will be used in the
                draft. Please enter the names of the players (one player per
                line) who will take part in the draft.
              </h3>
              <textarea
                id="draft-names"
                name="draft-names"
                cols="1"
                rows={Math.min(6, remainingCivs.length)}
                className="selected-names"
                defaultValue={draftedPlayers}
              />
            </div>
            <button
              onClick={() => runDraft()}
              className="modal-button run-draft-button"
            >
              Run Draft
            </button>
          </div>
        )}
        {modalShowResults && (
          <div className="random-draft-modal-content">
            <h1 style={{ fontSize: "3rem", margin: "0" }}>
              Random Draft Results
            </h1>
            <div className="random-draft-cards-list">
              {draftResults.map((draftRes) => {
                return (
                  <div
                    className="random-draft-card-result"
                    key={`${draftRes.name}-draft-result-card`}
                  >
                    <div className="modal-portrait">
                      <img
                        src={draftRes.portrait}
                        alt=""
                        className="modal-selected-portrait"
                      />
                      <img
                        src={draftRes.flag}
                        alt=""
                        className="modal-selected-flag"
                      />
                    </div>
                    <div className="card-text-wrapper">
                      <h1 className="card-text">{draftRes.player} as</h1>
                      <h2 className="card-text">
                        {draftRes.name} of {draftRes.nation}
                      </h2>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => runDraft(true)}
                className="modal-button run-draft-button"
              >
                Reroll
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default RandomSelector;
