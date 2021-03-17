import React, { useContext } from "react";
import landingStyles from "./register.module.scss";
import moment from "moment";
import Logo from "../../../fsiLogoWhite.png";
import { Context } from "../../context/WebinarContext";
import check from "../../../check-circle-outline-512.webp";
import AppButton from "../../AppButton";

const listItems = [
  "The pros and cons of IRAs, Roth IRAs, 401ks, pension plans and Social Security.",
  "Ways to ensure your nest egg lasts no matter how long you're retired.",
  "Find out how recent tax law changes benefit you and potentially reduce your taxes!",
  "How has the recent pandemic impacted the market - and can you avoid more losses?",
];

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

  const mappedItems = listItems.map((item, index) => {
    return (
      <span key={index}>
        <img src={check} alt="check icon" />
        <h3>{item}</h3>
      </span>
    );
  });
  return (
    <div className={landingStyles.landingOneContainer}>
      <h1 className={landingStyles.webinarTitle}>
        Maximise your Social Security benefits{" "}
      </h1>
      <div className={landingStyles.linksToRegister}>
        <div className={landingStyles.linksToRegisterHeader}>
          <img className={landingStyles.logo} src={Logo} alt="logo" />
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
          <div>{mappedItems}</div>
        </div>
        <div className={landingStyles.linksToRegisterButtons}>
          {!twoWebinars ? (
            <h1 className={landingStyles.dontMiss}>
              Don't miss out on this incredible opportunity.
            </h1>
          ) : (
            <>
              <h1 className={landingStyles.dontMiss}>
                Don't miss out on this incredible opportunity.
              </h1>
              <h2 className={landingStyles.registerToday}>Register Today!</h2>
            </>
          )}
          <span className={landingStyles.buttonBox}>
            {!twoWebinars ? (
              <AppButton title={"Register Today!"} onClick={handleOpenModal} />
            ) : (
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
            )}
          </span>
        </div>
      </div>
      <h4>
        With all the uncertainty surrounding our lives, NOW, more than ever is
        the time to get answers to your questions!
      </h4>
    </div>
  );
}

export default RegisterBanner;
