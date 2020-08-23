import React, { useState } from "react";
import Modal from "react-modal";
import AboutMeButton from "./AboutMeButton/AboutMeButton";
import { socialLinks } from "./socialLinks.js";
import { useWindowDimensions } from "../hooks";

function AboutMe() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  //adapts to small screens
  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowDimensions();

  return (
    <div className="about-me">
      <AboutMeButton
        onClick={() => setIsOpen(true)}
        className="about-me-button"
        scale={0.8}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },

          content: {
            top: windowWidth > 768 ? "20%" : "10%",
            left: windowWidth > 768 ? "20%" : "10%",
            right: windowWidth > 768 ? "20%" : "10%",
            bottom: windowWidth > 768 ? "20%" : "10%",
            backgroundColor: "#222831",
            border: "3px solid #121212",
            borderRadius: "50px",
          },
        }}
        contentLabel="About Me Panel"
      >
        <button onClick={closeModal} className="modal-close-button">
          {/* styled x-symbol */}
          &#10006;
        </button>
        <div className="modal-content-vertical modal-description">
          <div className="about-me-section">
            <h1 style={{ fontSize: "3rem", margin: 0 }}>About Me</h1>
            <h3 style={{ fonSize: "2rem", margin: 0, paddingLeft: "10px" }}>
              Clickables:
            </h3>
            <div className="clickables">
              {Object.keys(socialLinks).map((elem) => {
                return (
                  <div className="clickable-box" key={`${elem}-clickable`}>
                    <a
                      href={socialLinks[elem].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clickable-image-wrapper"
                    >
                      {socialLinks[elem].component}
                    </a>
                    <div className="clickable-description">
                      <a
                        href={socialLinks[elem].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable-image-wrapper"
                        style={{ width: "auto" }}
                      >
                        <h1 className="card-text">{socialLinks[elem].title}</h1>
                      </a>
                      <a
                        href={socialLinks[elem].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable-image-wrapper"
                        style={{ width: "auto" }}
                      >
                        <h3 className="card-text indented-subtitle">
                          {socialLinks[elem].subtitle}
                        </h3>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AboutMe;
