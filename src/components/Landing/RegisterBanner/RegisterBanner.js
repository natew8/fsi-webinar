import React, { useContext } from "react";
//Components
import { Context } from "../../context/WebinarContext";
import AppButton from "../../AppButton";
import AppLogo from "../../AppLogo";
//Assets
import whiteLogo from "../../../assets/logo/fsiLogoWhite.png";

//Style Modules
import landingStyles from "./register.module.scss";
import AppBulletList from "./AppBulletList";

function RegisterBanner({ openModal }) {
  const { schedules, twoWebinars, setPickedDate, setSchedule } = useContext(
    Context
  );
  function handleOpenModal(e) {
    e.stopPropagation();
    openModal();
  }
  function handleOpenModalPicked(e) {
    e.stopPropagation();
    openModal();
    setPickedDate(e.target.value);
    setSchedule(+e.target.value);
  }

  return (
    <div className={landingStyles.landingOneContainer}>
      <h1 className={landingStyles.webinarTitle}>
        Maximise your Social Security benefits{" "}
      </h1>
      <div className={landingStyles.linksToRegister}>
        <div className={landingStyles.linksToRegisterHeader}>
          <AppLogo src={whiteLogo} alt="FSI Logo White" width={400} />
          <div className={landingStyles.line}></div>
          <div>
            <h1 className={landingStyles.invited}>You're Invited</h1>
            <h2>
              Limited time live
              <strong className={landingStyles.online}>Online</strong>
              workshop
            </h2>
            <h3>
              Experienced in the privacy of your own home!<br></br>
              You don't need anything but a screen and internet to join.
            </h3>
          </div>
        </div>
        <div className={landingStyles.linksToRegisterList}>
          <h1 className={landingStyles.learn}>
            Attend this free live event and learn...
          </h1>
          <div>
            <AppBulletList />
          </div>
        </div>
        <div className={landingStyles.linksToRegisterButtons}>
          {/* {!twoWebinars ? ( */}
          <h1 className={landingStyles.dontMiss}>
            Don't miss out on this incredible opportunity.
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
            <AppButton title={"Register Today!"} onClick={handleOpenModal} />
            {/* ) : (
              <>
                <AppButton
                  value={+schedules[0].schedule}
                  title={schedules[0].comment}
                  onClick={handleOpenModalPicked}
                />
                <h1 className={landingStyles.or}>or</h1>
                <AppButton
                  value={schedules[1].schedule}
                  title={schedules[1].comment}
                  onClick={handleOpenModalPicked}
                />
              </>
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
