import React from "react";
//Components
import AppLogo from "../AppLogo";
//Assets
import blueLogo from "../../assets/logo/fsiLogo.png";
//Style Modules
import confirmStyles from "./confirmation.module.scss";

function WebinarInfoCard(props) {
  return (
    <div className={confirmStyles.webinarInfo}>
      <AppLogo src={blueLogo} width={300} style={{ marginTop: "20px" }} />
      <hr width="75%"></hr>
    </div>
  );
}

export default WebinarInfoCard;
