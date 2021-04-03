import React from "react";
//Components
import AppLogo from "./AppLogo";
//Assets
import blueLogo from "../assets/logo/fsiLogo.png";
//Style Modules
import "../App.css";

function AppErrorMessage(props) {
  return (
    <div className="errorBox">
      <AppLogo
        width={300}
        style={{ marginTop: 100 }}
        src={blueLogo}
        alt="FSI Logo"
      />
      <p>An unknown error has occured. Please try again later.</p>
      <p>
        If you need further assistance, please email us at info@fsiplanners.com
      </p>
    </div>
  );
}

export default AppErrorMessage;
