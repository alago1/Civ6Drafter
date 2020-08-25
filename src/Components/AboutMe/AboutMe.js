import React, { useState } from "react";
import PageModal from "../PageModal";
import AboutMeButton from "./AboutMeButton/AboutMeButton";
import { socialLinks } from "../socialLinks.js";
import { useWindowDimensions } from "../../hooks";

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
      <PageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        contentLabel="About Me Panel"
      >
        <div className="modal-content-vertical modal-description">
          <div className="about-me-section">
            <h1 className="modal-title-text">About Me</h1>
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
      </PageModal>
    </div>
  );
}

export default AboutMe;
