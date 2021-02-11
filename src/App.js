import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <Landing />
    </div>
  );
}

export default App;
