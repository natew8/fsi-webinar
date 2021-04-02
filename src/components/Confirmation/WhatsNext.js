import React, { useContext } from "react";

//Components
import AppButton from "../AppButton";
import { Context } from "../context/WebinarContext";

//Style Modules
import confirmStyles from "./confirmation.module.scss";

function WhatsNext(props) {
  const { webinarLink, setFinished } = useContext(Context);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <h2 className={confirmStyles.nextTitle}>What Happens Next?</h2>
      <hr></hr>
      <ol>
        <li>
          You should have received and email confirming your registration. This
          email contains details about the event including the date and time as
          well as the Webinar room link and password (if applicable).
        </li>
        <li>
          We encourage you to bookmark the room link included in the
          confirmation email so you are ready to roll come the day of the
          webinar. You can also access this page{" "}
          <a
            style={{ textDecoration: "none", color: "#f56d1e" }}
            target="_blank"
            href={`${webinarLink}`}
          >
            here!
          </a>
        </li>
        <li>
          If you have any questions or concerns leading up to the event please
          don't hesitate to contact us!
        </li>
        <ul>
          <li>info@fsiplanners.com</li>
          <li>(801) 316-4100</li>
        </ul>
        <li>
          Get Excited! This is sure to be an incredibly engaging and informative
          event.
        </li>
      </ol>
      <hr></hr>
      <p>
        If you wish to register another individual for this event please click
        the button below!
      </p>
      <AppButton
        title="Back to home"
        style={{ width: "100%" }}
        onClick={refreshPage}
      />
    </>
  );
}

export default WhatsNext;
