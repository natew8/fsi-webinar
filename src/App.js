import Header from "./components/Header/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import { useContext } from "react";
import { Context } from "./components/context/WebinarContext";
import Footer from "./components/Footer/Footer";
import AppButton from "./components/AppButton";

function App() {
  const { loading } = useContext(Context);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {/* <Header /> */}
          <Landing />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
