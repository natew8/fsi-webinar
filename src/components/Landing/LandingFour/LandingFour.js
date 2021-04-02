import React, { useContext } from "react";
//Components
import AppLogo from "../../AppLogo";
//Assets
import blueLogo from "../../../assets/logo/fsiLogo.png";
//Style Modules
import landingStylesFour from "./landingFour.module.scss";

function LandingFour() {
  return (
    <div className={landingStylesFour.landingContainer}>
      <h1 className={landingStylesFour.title}>
        Focused On People, Not Profits...
      </h1>

      <span className={landingStylesFour.infoBox}>
        <span className={landingStylesFour.logoBox}>
          <AppLogo
            src={blueLogo}
            alt="logo"
            className={landingStylesFour.logo}
          />
          <span className={landingStylesFour.contactBox}>
            <div className={landingStylesFour.contact}>
              <p className={landingStylesFour.contactType}>Phone:</p>
              <p> (801) 316-4100</p>
            </div>
            <div className={landingStylesFour.contact}>
              <p className={landingStylesFour.contactType}>Email:</p>
              <p>info@fsiplanners.com</p>
            </div>
            <div className={landingStylesFour.contact}>
              <p className={landingStylesFour.contactType}>Address:</p>
              <p>6955 South Union Park Center, Suite #410, Midvale, UT 84047</p>
            </div>
          </span>
        </span>
        <div className={landingStylesFour.line}></div>
        <p className={landingStylesFour.summary}>
          At Financial Strategies Institute our first priority is helping you
          take care of yourself and your family. We want to learn more about
          your personal situation, identify your dreams and goals, and
          understand your tolerance for risk. Long-term relationships that
          encourage open and honest communication have been the cornerstone of
          our foundation of success.
        </p>
      </span>
    </div>
  );
}

export default LandingFour;
