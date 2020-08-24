import React from "react";
import { toJS } from "mobx";
import { useLocalStore } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import { computeCivs } from "./util/computeCivs";

export const StoreContext = React.createContext();

const computedCivs = computeCivs();
// console.log(computedCivs);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    selectedCivId: "america1", //starts with america to avoid some edge cases

    civs: computedCivs,

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

    //
    //
    //
    //     get allCivsByName() {
    //       return Object.keys(civs)
    //         .filter((elem) => elem !== "default")
    //         .map((elem) => `${civs[elem].name} of ${civs[elem].nation}`);
    //     },

    //     civsByLongName: () => {
    //       const parseCivInfo = (civ) => {
    //         let civInfo = civ;
    //         for (let param of Object.keys(civInfo)) {
    //           if (civInfo[param] === "") {
    //             civInfo[param] = civs.default[param];
    //           }
    //         }
    //         return civInfo;
    //       };

    //       let parsedCivByLongName = {};
    //       Object.keys(civs)
    //         .filter((elem) => elem !== "default")
    //         .forEach(
    //           (elem) =>
    //             (parsedCivByLongName[
    //               `${civs[elem].name} of ${civs[elem].nation}`
    //             ] = parseCivInfo(civs[elem]))
    //         );
    //       return parsedCivByLongName;
    //     },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
