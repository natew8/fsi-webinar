import React, { useContext } from "react";
//Components
import Landing from "./components/Landing/Landing";
import { Context } from "./components/context/WebinarContext";
import Footer from "./components/Footer/Footer";
//Assets
import blueLogo from "./assets/fsiLogo.png";
//Styles Modules
import "./App.css";
import AppLogo from "./components/AppLogo";
import AppFormField from "./components/Form/AppFormField";
import RegisterForm from "./components/Form/RegisterForm";

function App() {
  const { loading } = useContext(Context);
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
          {/* <Header /> */}
          <Landing />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
