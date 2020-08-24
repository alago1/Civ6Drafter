import React from "react";
import { isEmptyObject } from "./isEmptyObject";

export const genDescriptionByKey = (civ, key) => {
  const key_desc = [];
  if (isEmptyObject(civ)) return [];

  if (!isEmptyObject(civ[key])) {
    Object.keys(civ[key]).forEach((param, index) => {
      key_desc.push(
        <li
          key={`${civ.nation}-${civ.leader}-${key}-${index}`}
          className="description-li"
        >
          <strong>{param}: </strong>
          <span className="modal-description-span">
            {typeof civ[key][param] === "object" && (
              <img
                src={civ[key][param].image}
                alt=""
                className="description-icon"
              />
            )}
            {typeof civ[key][param] === "object"
              ? civ[key][param].description
              : civ[key][param]}
          </span>
        </li>
      );
    });
  }
  return key_desc;
};

export const generateCivDescription = (civ) => {
  let fullDescription = [];

  fullDescription.push(
    <div key={`leader-features`}>
      <h3>Leader Features and Abilities</h3>
      <ul>{genDescriptionByKey(civ, "leader-description")}</ul>
    </div>,
    <div key={`civilization-features`}>
      <h3>Civilization Features and Abilities</h3>
      <ul>{genDescriptionByKey(civ, "civ-description")}</ul>
    </div>
  );

  const dlc_modifiers = genDescriptionByKey(civ, "dlc-modifiers");
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
