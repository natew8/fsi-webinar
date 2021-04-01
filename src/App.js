import React, { useContext } from "react";
//Components
import Landing from "./components/Landing/Landing";
import { Context } from "./components/context/WebinarContext";
import Footer from "./components/Footer/Footer";
//Assets
import blueLogo from "./assets/logo/fsiLogo.png";
//Styles Modules
import "./App.css";
import AppLogo from "./components/AppLogo";
import AppErrorMessage from "./components/AppErrorMessage";
import ConfirmationScreen from "./components/Confirmation/ConfirmationScreen";

function App() {
  const { loading, error, finished } = useContext(Context);

  if (finished) {
    return (
      <div className="App">
        <ConfirmationScreen />;
      </div>
    );
  }

  if (error)
    return (
      <div className="App">
        <AppErrorMessage />
      </div>
    );

  return (
    <div className="App">
      {loading ? (
        <div style={{ width: "100%", height: "100%", backgroundColor: "#eee" }}>
          <AppLogo
            width={500}
            style={{ marginTop: 100 }}
            src={blueLogo}
            alt="FSI Logo"
          />
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Landing />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
