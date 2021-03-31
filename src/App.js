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

function App() {
  const { loading, error } = useContext(Context);
  if (error)
    return (
      <>
        <p>An unknown error has occured. Please try again later.</p>
        <p>
          If you need further assistance, please email us at email@email.com
        </p>
      </>
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
