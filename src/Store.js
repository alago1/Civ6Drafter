import React from "react";
import { toJS } from "mobx";
import { useLocalStore } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import { computeCivs } from "./util/computeCivs";
import { sample } from "./util/sampleKPopulation";

export const StoreContext = React.createContext();

const computedCivs = computeCivs();
// console.log(computedCivs);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    windowWidth: 0,
    windowHeight: 0,

    selectedCivId: "america1", //starts with america to avoid some edge cases

    civs: computedCivs,

    applyFilters: (filters) => {
      const filtered_civs = {};
      for (let param of Object.keys(computedCivs)) {
        if (filters.includes(computedCivs[param]["dlc-status"])) {
          filtered_civs[param] = computedCivs[param];
        }
      }
      console.log(filtered_civs);
      store.civs = filtered_civs;
    },

    get selectedCiv() {
      return toJS(store.civs)[store.selectedCivId];
    }, //civilization whose characterPanel would show the information of

    get playerCivs() {
      //civilizations who have been marked as selected
      return Object.values(store.civs).filter(
        (elem) => elem.status === "player"
      );
    },

    get bannedCivs() {
      //civilizations who have been marked as banned
      return Object.values(store.civs).filter(
        (elem) => elem.status === "banned"
      );
    },

    get remainingCivs() {
      //civilization who have been marked as null (neither selected or banned)
      return Object.values(store.civs).filter((elem) => elem.status === null);
    },

    characterModalState: false, //wheter the characterPanel should be showing

    draftModalState: false, //wheter the results should be shown
    draftedPlayers: "", //string with names of players participating in the draft (one name per line)
    selectedPlayers: "", //string with names of players for selected civs (one name per line)
    draftResults: [],

    runDraft: (useStoredNames) => {
      let draftCompleteResults = [];
      let draftText;
      if (!useStoredNames) {
        draftText = document.getElementById("draft-names").value;
        store.draftedPlayers = draftText;
      } else {
        draftText = store.draftedPlayers;
      }
      draftText = draftText.split("\n").filter((elem) => elem !== "");

      if (store.playerCivs.length !== 0) {
        let selectedText;
        if (!useStoredNames) {
          selectedText = document.getElementById("selected-names").value;
        } else {
          selectedText = store.selectedPlayers;
        }
        selectedText = selectedText.split("\n").filter((elem) => elem !== "");

        if (selectedText.length !== store.playerCivs.length) {
          let selectedSet = new Set(selectedText);
          let draftSet = new Set(draftText);
          let i = 1;
          let to_be_added = new Set();
          while (
            selectedText.length + to_be_added.size <
            store.playerCivs.length
          ) {
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
        if (!useStoredNames) store.selectedPlayers = selectedText.join("\n");

        draftCompleteResults = draftCompleteResults.concat(
          selectedText.map((elem, index) => {
            return {
              player: elem,
              civilization: toJS(store.playerCivs[index]),
            };
          })
        );

        // console.log('selected:')
        // console.log(fullSetup)
      }

      let maxNumberOfDrafts = Math.min(
        draftText.length,
        store.remainingCivs.length
      );

      let draft = sample(store.remainingCivs, maxNumberOfDrafts);
      draftCompleteResults = draftCompleteResults.concat(
        draftText.slice(0, maxNumberOfDrafts).map((elem, index) => {
          return {
            player: elem,
            civilization: toJS(draft[index]),
          };
        })
      );

      //Simple report to console
      console.log(draftCompleteResults);

      store.draftResults = draftCompleteResults;
      store.draftModalState = true;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
