import React from "react";
//Components
import AppLogo from "./AppLogo";
//Assets
import blueLogo from "../assets/logo/fsiLogo.png";

function AppErrorMessage(props) {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#eee" }}>
      <AppLogo
        width={500}
        style={{ marginTop: 100 }}
        src={blueLogo}
        alt="FSI Logo"
      />
      <p>An unknown error has occured. Please try again later.</p>
      <p>If you need further assistance, please email us at email@email.com</p>
    </div>
  );
}

export default AppErrorMessage;
