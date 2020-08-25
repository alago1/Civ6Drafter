import React from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import AppContent from "./Components/AppContent";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <AboutMe />
      <AppContent />
    </div>
  );
}

export default App;
