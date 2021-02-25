import React, { useContext } from "react";
import landingStyles from "./register.module.scss";
import moment from "moment";
import Logo from "../../../fsiLogoWhite.png";
import { Context } from "../../context/WebinarContext";

function RegisterBanner(props) {
  const { schedules, twoWebinars } = useContext(Context);
  const { openModal } = props;
  console.log(schedules);
  function handleOpenModal(e) {
    e.stopPropagation();
    openModal();
  }
  return (
    <div className={landingStyles.landingOneContainer}>
      <h1>Maximise your Social Security benefits </h1>
      <div className={landingStyles.linksToRegister}>
        <div className={landingStyles.linksToRegisterHeader}>
          <img className={landingStyles.logo} src={Logo} alt="logo" />
          <div className={landingStyles.line}></div>
          <div>
            <h1>You're Invited</h1>
            <h2>
              Limited time live
              <h1>Online</h1>
              workshop
            </h2>
            <h3>
              Experienced in the privacy of your own home!<br></br>
              You don't need anything but a screen and internet to join.
            </h3>
          </div>
        </div>
        <div className={landingStyles.linksToRegisterList}>
          <h1>Attend this free live event and learn...</h1>
          <div>
            <span>
              <img
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/check-circle-outline-512.webp"
                alt="check"
              />
              <h3>
                The pros and cons of IRAs, Roth IRAs, 401ks, pension plans and
                Social Security.
              </h3>
            </span>
            <span>
              <img
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/check-circle-outline-512.webp"
                alt="check"
              />
              <h3>
                Ways to ensure your nest egg lasts no matter how long you're
                retired.
              </h3>
            </span>
            <span>
              <img
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/check-circle-outline-512.webp"
                alt="check"
              />
              <h3>
                Find out how recent tax law changes benefit you and potentially
                reduce your taxes!
              </h3>
            </span>
            <span>
              <img
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/check-circle-outline-512.webp"
                alt="check"
              />
              <h3>
                How has the recent pandemic impacted the market?
                <h6>(and can you avoid more losses?)</h6>
              </h3>
            </span>
          </div>
        </div>
        <div className={landingStyles.linksToRegisterButtons}>
          {!twoWebinars ? (
            <h1>Don't miss out on this incredible opportunity.</h1>
          ) : (
            <>
              <h1>Don't miss out on this incredible opportunity.</h1>
              <h2>Register Today!</h2>
            </>
          )}
          <span className={landingStyles.buttonBox}>
            {!twoWebinars ? (
              <button onClick={handleOpenModal}></button>
            ) : (
              <>
                <button
                  className={landingStyles.registerButton}
                  onClick={handleOpenModal}
                >
                  {schedules[0].comment}
                </button>
                <h1>or</h1>
                <button
                  className={landingStyles.registerButton}
                  onClick={handleOpenModal}
                >
                  {schedules[1].comment}
                </button>
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
