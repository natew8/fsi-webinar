import React, { useContext } from "react";
import dayjs from "dayjs";
//Components
import AppLogo from "../AppLogo";
import presenters from "../Landing/LandingThree/presenters";
import { Context } from "../context/WebinarContext";
//Assets
import blueLogo from "../../assets/logo/fsiLogo.png";
//Style Modules
import confirmStyles from "./confirmation.module.scss";
import AppInfoText from "./AppInfoText";

function WebinarInfoCard(props) {
  const { presenters, registeredDate, webinarLink, webinarName } = useContext(
    Context
  );

  return (
    <div className={confirmStyles.webinarInfo}>
      <AppLogo
        className={confirmStyles.logo}
        style={{ marginBottom: "1rem" }}
        src={blueLogo}
        width={400}
      />
      <div className={confirmStyles.infoBox}>
        <h2>{webinarName}</h2>
        <AppInfoText label="Presented By: " info={presenters.name} />
        <AppInfoText
          style={{ color: "#f56d1e" }}
          info={dayjs(registeredDate).format("dddd, DD MMMM YYYY, hh:mm A")}
        />
        <hr width="75%"></hr>
        <div>
          <p>We are so happy you decided to join us!</p>
          <p style={{ fontWeight: "bold" }}>
            Please make note of the date and time of the event and come ready
            with questions!
          </p>
        </div>
        <hr width="75%"></hr>
        <h1>We can't wait to see you there!</h1>
      </div>
    </div>
  );
}

export default WebinarInfoCard;
