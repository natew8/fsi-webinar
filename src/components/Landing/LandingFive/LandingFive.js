import React from "react";
import { Link } from "react-scroll";
import landingStylesFive from "./landingFive.module.scss";

function LandingFive(props) {
  return (
    <div className={landingStylesFive.landingContainer}>
      <h1 className={landingStylesFive.fiveHeader}>You're Invited!</h1>
      <h2 className={landingStylesFive.fiveSubHeader}>
        Free online workshop event
      </h2>
      <Link to="top" spy={true} smooth={true}>
        <button className={landingStylesFive.registerButton}>
          Register Today!
        </button>
      </Link>
    </div>
  );
}

export default LandingFive;
