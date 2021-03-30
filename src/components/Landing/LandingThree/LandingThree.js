import React from "react";
import landingStylesThree from "./landingThree.module.scss";
import headshot from "../../../assets/davidHeadshot.png";
import PresenterBio from "./PresenterBio";

const query = new URLSearchParams(window.location.search);
const presenter = query.get("presenter");

function LandingThree() {
  return <PresenterBio />;
}

export default LandingThree;
