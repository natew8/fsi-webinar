import React, { useContext } from "react";
import { Context } from "../../context/WebinarContext";
//Components
import presentersList from "./presenters";
//style Modules
import landingStylesThree from "./landingThree.module.scss";

function PresenterModule() {
  //Context
  const { presenters } = useContext(Context);
  //Breaking down the first name
  const firstName = presenters.name.split(" ")[0];
  //Filter presenter array
  const presenter = presentersList.filter((pres) =>
    pres.name.toLowerCase().includes(firstName.toLowerCase())
  );
  //Mapping over the info
  const presenterMap = presenter?.map((enter) => (
    <span key={enter.id} className={landingStylesThree.presenterBox}>
      <div>
        <h1 className={landingStylesThree.presenterName}>{enter.name}</h1>
        <img src={enter.headShot.default} alt="headshot" />
        <p className={landingStylesThree.bio}>{enter.bio}</p>
      </div>
    </span>
  ));

  return (
    <div className={landingStylesThree.landingContainer}>
      <h2 className={landingStylesThree.landingHeader}>About your host</h2>
      {presenterMap}
    </div>
  );
}

export default PresenterModule;
