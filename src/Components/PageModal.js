import React from "react";
import Modal from "react-modal";
import { useWindowDimensions } from "../hooks";

const smallView = {
  top: "20%",
  left: "20%",
  right: "20%",
  bottom: "20%",
  backgroundColor: "#222831",
  border: "3px solid #121212",
  borderRadius: "50px",
};

const largeView = {
  top: "10%",
  left: "10%",
  right: "10%",
  bottom: "10%",
  backgroundColor: "#222831",
  border: "3px solid #121212",
  borderRadius: "50px",
};

function PageModal(props) {
  //updates with windowDimensions
  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowDimensions();

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      closeTimeoutMS={props.closeTimeoutMS}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },

        content:
          windowWidth <= 768 || props.forceLargeView ? largeView : smallView,
      }}
      contentLabel={props.contentLabel}
    >
      <button onClick={props.onRequestClose} className="modal-close-button">
        {/* styled x-symbol */}
        &#10006;
      </button>
      {props.children}
    </Modal>
  );
}

export default PageModal;
