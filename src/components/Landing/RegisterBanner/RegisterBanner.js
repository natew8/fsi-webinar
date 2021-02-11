import React from "react";
import landingStyles from "./register.module.scss";

function RegisterBanner(props) {
  return (
    <div className={landingStyles.landingOneContainer}>
      <h1>Your Retirement and Taxes</h1>
      <div className={landingStyles.linksToRegister}>
        <div className={landingStyles.linksToRegisterHeader}>
          <img
            src="https://static.wixstatic.com/media/e82ded_9bab553a72f44243a0e9b02ff806bf25~mv2.png/v1/fill/w_266,h_130,al_c,q_85,usm_0.66_1.00_0.01/set%20sail%20white%20lettering.webp"
            alt="logo"
          />
          <div className={landingStyles.line}></div>
          <div>
            <h1>You're Invited</h1>
            <h2>
              Limited time live <h1>Online</h1>workshop
            </h2>
            <p>
              Experienced in the privacy of your own home - You don't need
              anything but a screen and internet to join!
            </p>
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
        <div className={landingStyles.linksToRegisterTag}>
          <h1>Dont miss out on this incredible opportunity.</h1>
          <h2>Register Today!</h2>
        </div>
        <div className={landingStyles.linksToRegisterButtons}>
          <span>
            <button>Register for this date</button>
            <h1>or</h1>
            <button>Register for this date</button>
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
