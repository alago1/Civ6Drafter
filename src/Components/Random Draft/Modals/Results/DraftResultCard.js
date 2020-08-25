import React from "react";

function DraftResultCard(props) {
  return (
    <div className={props.className}>
      <div className="draft-results-portrait">
        <img
          src={props.civilization.portrait}
          alt=""
          className="modal-selected-portrait"
        />
        <img
          src={props.civilization.flag}
          alt=""
          className="modal-selected-flag"
        />
      </div>
      <div className="card-text-wrapper">
        <h1 className="card-text">{props.player} as</h1>
        <h2 className="card-text">
          {props.civilization.name} of {props.civilization.nation}
        </h2>
      </div>
    </div>
  );
}

export default DraftResultCard;
