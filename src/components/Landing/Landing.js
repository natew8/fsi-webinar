import React from "react";
import landingStyles from "./landing.module.scss";
import RegisterBanner from "./RegisterBanner/RegisterBanner";

function Landing(props) {
  return (
    <>
      <div className={landingStyles.landingOne}>
        <RegisterBanner />
      </div>
      <div></div>
    </>
  );
}

export default Landing;
