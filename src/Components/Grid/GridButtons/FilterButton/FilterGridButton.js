import React, { useState, useContext, useRef } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { StoreContext } from "../../../../Store";
import PageModal from "../../../PageModal";
import Tag from "./Tag";
import module_styles from "./FilterGridButton.module.css";

const dlc_filters = [
  "Vanilla",
  "Scenario Pack Poland",
  "Scenario Pack Australia",
  "Scenario Pack Persia and Macedon",
  "Scenario Pack Nubia",
  "Scenario Pack Khmer and Indonesia",
  "Rise and Fall Expansion",
  "Gathering Storm Expansion",
  "Frontier Pass",
];

function FilterGridButton() {
  const store = useContext(StoreContext);
  const filters = useRef(new Set(dlc_filters));

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleTagClick = (value) => {
    filters.current.has(value)
      ? filters.current.delete(value)
      : filters.current.add(value);
    console.log(filters.current);
  };

  const closeModal = () => {
    setIsOpen(false);
    store.applyFilters([...filters.current]);
  };
  return (
    <div className="filter-grid-button-container">
      <button
        className={module_styles["filter-grid-button"]}
        onClick={() => setIsOpen(true)}
        title="Filter"
      >
        <BsFilterLeft className={module_styles["filter-grid-button-icon"]} />
      </button>
      <PageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        contentLabel="Filter Panel"
        className={module_styles["filter-modal"]}
      >
        <h1 className="modal-title">Filter By Expansions</h1>
        <ul className={module_styles["tags"]}>
          {dlc_filters.map((elem) => {
            return (
              <li className={module_styles["tag-li"]} key={`${elem}-tag`}>
                <Tag
                  onClick={handleTagClick}
                  value={elem}
                  text={elem}
                  initialState={filters.current.has(elem)}
                />
              </li>
            );
          })}
        </ul>
      </PageModal>
    </div>
  );
}

export default FilterGridButton;
