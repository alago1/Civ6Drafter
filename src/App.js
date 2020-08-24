import React from "react";
import { StoreProvider } from "./Store";
import AboutMe from "./Components/AboutMe";
import AppContent from "./Components/AppContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <StoreProvider>
        <AppContent />
      </StoreProvider>
    </div>
  );
}

export default App;
