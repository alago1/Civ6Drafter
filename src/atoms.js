import { atom } from "recoil";

export const selectedCivilization = atom({
  key: "selectedCiv",
  default: {},
});

export const bannedCivilizations = atom({
  key: "bannedCivs",
  default: new Set(),
});

export const playerCivilizations = atom({
  key: "playerCivs",
  default: new Set(),
});

export const modalState = atom({
  key: "modalState",
  default: false,
});
