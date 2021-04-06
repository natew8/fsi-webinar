//Libraries
import React from "react";
import { Link } from "react-scroll";
import ReactGa from "react-ga";
//Components
import AppButton from "../../AppButton";
//Style Modules
import landingStylesFive from "./landingFive.module.scss";

function LandingFive() {
  const gaClick = () => {
    ReactGa.event({
      category: "User",
      action: "Clicked Register",
      label: "Bottom register button",
    });
  };
  return (
    <div className={landingStylesFive.landingContainer}>
      <h1 className={landingStylesFive.fiveHeader}>You're Invited!</h1>
      <h2 className={landingStylesFive.fiveSubHeader}>
        Free online workshop event
      </h2>
      <Link to="top" spy={true} smooth={true}>
        <AppButton onClick={gaClick} title={"Register Today!"} />
      </Link>
    </div>
  );
}

export default LandingFive;
