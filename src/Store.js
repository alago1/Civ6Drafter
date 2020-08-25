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
    selectedCivId: "america1", //starts with america to avoid some edge cases

    civs: computedCivs,

    applyFilters: (filters) => {
      const filtered_civs = {};
      for (let param of Object.keys(computedCivs)) {
        if (filters.includes(computedCivs[param]["dlc-status"])) {
          filtered_civs[param] = computedCivs[param];
          if (store.civs?.[param]?.status === "banned") {
            filtered_civs[param].status = "banned";
          }
        }
      }

      const numberOfCivs = Object.keys(filtered_civs).length;

      store.civs = filtered_civs;
      if (store.draftedPlayers.size > numberOfCivs) {
        store.draftedPlayers = new Set(
          Array.from(store.draftedPlayers).slice(0, numberOfCivs)
        );
      }
      if (store.selectedPlayers.size > numberOfCivs) {
        store.selectedPlayers = new Set(
          Array.from(store.selectedPlayers).slize(0, numberOfCivs)
        );
      }
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

    draftedPlayers: new Set(), //string with names of players participating in the draft (one name per line)

    updateDraftedPlayers: (newPlayers) => {
      store.draftedPlayers = newPlayers;
    },

    selectedPlayers: new Set(), //string with names of players for selected civs (one name per line)

    updateSelectedPlayers: (newPlayers) => {
      store.selectedPlayers = newPlayers;
    },

    draftResults: [],

    runDraft: async () => {
      let draftCompleteResults = [];
      let draftText = Array.from(store.draftedPlayers);

      if (store.playerCivs.length !== 0) {
        let selectedText = Array.from(store.selectedPlayers);

        // if missing names from selected players - add placeholders
        if (selectedText.length !== store.playerCivs.length) {
          let i = 1;
          let filler_names = new Set();
          while (
            selectedText.length + filler_names.size !==
            store.playerCivs.length
          ) {
            const potentialName = `UnnamedPlayer${i}`;
            //assert that this name does not conflict with those inputted by the user
            if (
              !store.selectedPlayers.has(potentialName) &&
              !store.draftedPlayers.has(potentialName)
            )
              filler_names.add(potentialName);
            i++;
          }
          selectedText.push(Array.from(filler_names));
        }

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

      let draft = sample(store.remainingCivs, draftText.length);
      draftCompleteResults = draftCompleteResults.concat(
        draftText.slice(0, draftText.length).map((elem, index) => {
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
