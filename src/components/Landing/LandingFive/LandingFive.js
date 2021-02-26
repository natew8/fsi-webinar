import React from "react";
import landingStylesFive from "./landingFive.module.scss";

function LandingFive(props) {
  const { openModal } = props;
  return (
    <div className={landingStylesFive.landingContainer}>
      <h1 className={landingStylesFive.fiveHeader}>You're Invited!</h1>
      <h2 className={landingStylesFive.fiveSubHeader}>
        Free online workshop event
      </h2>
      <button onClick={openModal} className={landingStylesFive.registerButton}>
        Register Here!
      </button>
    </div>
  );
}

export default LandingFive;
