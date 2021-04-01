import React from "react";
//Components
import AppLogo from "../AppLogo";
//Assets
import blueLogo from "../../assets/logo/fsiLogo.png";
//Style Module
import confirmStyles from "./confirmation.module.scss";
import WebinarInfoCard from "./WebinarInfoCard";
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
          <div className={confirmStyles.boxRight}></div>
        </div>
        <div className={confirmStyles.contactFooter}>
          For questions or concerns please contact us at:
        </div>
      </div>
    </div>
  );
}

export default ConfirmationScreen;
