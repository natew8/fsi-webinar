import React from "react";
import ReactGa from "react-ga";
import ReactPixel from 'react-facebook-pixel'
//Components
import AppButton from "../../AppButton";
import AppLogo from "../../AppLogo";
//Assets
import whiteLogo from "../../../assets/logo/fsiLogoWhite.png";

//Style Modules
import landingStyles from "./register.module.scss";
import AppBulletList from "./AppBulletList";

function RegisterBanner({ openModal }) {


  function handleOpenModal(e) {
    e.stopPropagation();
    openModal();
    window.dataLayer.push({
      event: "event",
      eventProps: {
        category: "User",
        action: "Clicked Register",
        label: "Top register button",
      },
    });
    ReactGa.event({
      category: "User",
      action: "Clicked Register",
      label: "Top register button",
    });
    ReactPixel.trackCustom("Open Registration Modal - First Button")
  }
  // function handleOpenModalPicked(e) {
  //   e.stopPropagation();
  //   openModal();
  //   setPickedDate(e.target.value);
  //   setSchedule(+e.target.value);
  // }

  return (
    <div className={landingStyles.landingOneContainer}>
      <h1 className={landingStyles.webinarTitle}>
        Maximise your Social Security benefits
      </h1>
      <div className={landingStyles.linksToRegister}>
        <div className={landingStyles.linksToRegisterHeader}>
          <AppLogo
            className={landingStyles.logo}
            src={whiteLogo}
            alt="FSI Logo White"
          />
          <div className={landingStyles.line}></div>
          <div>
            <h1 className={landingStyles.invited}>You're Invited</h1>
            <h2 className={landingStyles.limited}>
              Limited time live
              <em className={landingStyles.online}>Online</em>
              workshop
            </h2>
            <h3>
              Experienced in the privacy of your own home!<br></br>
              You don't need anything but a screen and internet to join.
            </h3>
          </div>
        </div>
        <hr></hr>
        <div className={landingStyles.linksToRegisterList}>
          <h1 className={landingStyles.learn}>
            Attend this free live event and learn...
          </h1>
          <div>
            <AppBulletList />
          </div>
        </div>
        <hr></hr>
        <div className={landingStyles.linksToRegisterButtons}>
          {/* {!twoWebinars ? ( */}
          <h1 className={landingStyles.dontMiss}>
            Don't miss out on this incredible opportunity!
          </h1>
          {/* ) : (
            <>
              <h1 className={landingStyles.dontMiss}>
                Don't miss out on this incredible opportunity.
              </h1>
              <h2 className={landingStyles.registerToday}>Register Today!</h2>
            </>
          )} */}
          <span className={landingStyles.buttonBox}>
            {/* {!twoWebinars ? ( */}
            <AppButton
              className={landingStyles.button}
              title={"Register Today!"}
              onClick={handleOpenModal}
            />
            {/* ) : (
              <div>
                <AppButton
                  value={schedules[0].schedule}
                  title={schedules[0].comment}
                  onClick={handleOpenModalPicked}
                />
                <h1 className={landingStyles.or}>or</h1>
                <AppButton
                  value={schedules[1].schedule}
                  title={schedules[1].comment}
                  onClick={handleOpenModalPicked}
                />
              </div>
            )} */}
          </span>
        </div>
      </div>
      <p>
        With all the uncertainty surrounding our lives, <em> NOW</em>, more than
        ever is the time to get answers to your questions!
      </p>
    </div>
  );
}

export default RegisterBanner;
