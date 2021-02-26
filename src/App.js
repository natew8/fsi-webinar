import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Modal from "./components/Modal/Modal";
import { useContext } from "react";
import { Context } from "./components/context/WebinarContext";

function App() {
  const { loading } = useContext(Context);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header />
          <Landing />
        </>
      )}
    </div>
  );
}

export default App;
