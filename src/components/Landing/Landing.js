import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/WebinarContext";
import Modal from "../Modal/Modal";
import landingStyles from "./landing.module.scss";
import LandingFive from "./LandingFive/LandingFive";
import LandingFour from "./LandingFour/LandingFour";
import LandingThree from "./LandingThree/LandingThree";
import LandingTwo from "./LandingTwo/LandingTwo";
import RegisterBanner from "./RegisterBanner/RegisterBanner";

function Landing(props) {
  const { loading, setLoading } = useContext(Context);
  //Modal
  const [modal, setModal] = useState(false);
  const selectModal = () => setModal(!modal);

  return (
    <>
      {!loading ? <Modal modal={modal} closeModal={selectModal} /> : null}
      <div id="top" className={landingStyles.landingOne}>
        <RegisterBanner modal={modal} openModal={selectModal} />
      </div>
      <div className={landingStyles.landingTwo}>
        <LandingTwo modal={modal} openModal={selectModal} />
      </div>
      <div className={landingStyles.landingThree}>
        <LandingThree />
      </div>
      <div className={landingStyles.landingFour}>
        <LandingFour />
      </div>
      <div className={landingStyles.landingFive}>
        <div className={landingStyles.lanFiveHeader}>
          <h1>Retire With Confidence!</h1>
        </div>
        <LandingFive modal={modal} openModal={selectModal} />
      </div>
    </>
  );
}

export default Landing;
