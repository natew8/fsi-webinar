import React from "react";
//Components
import AppLogo from "../AppLogo";
//Assets
import blueLogo from "../../assets/logo/fsiLogo.png";
//Style Module
import confirmStyles from "./confirmation.module.scss";
import WebinarInfoCard from "./WebinarInfoCard";
import WhatsNext from "./WhatsNext";
function ConfirmationScreen(props) {
  return (
    <div className={confirmStyles.bounds}>
      <div className={confirmStyles.container}>
        <div className={confirmStyles.header}>
          <h1>You're Registered!</h1>
        </div>
        <div className={confirmStyles.body}>
          <div className={confirmStyles.boxLeft}>
            <WebinarInfoCard />
          </div>
          <div className={confirmStyles.boxRight}>
            <WhatsNext />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationScreen;
