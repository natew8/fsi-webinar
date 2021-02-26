import React, { useContext, useState } from "react";
import { Context } from "../context/WebinarContext";
import Modal from "../Modal/Modal";
import landingStyles from "./landing.module.scss";
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
      <Modal modal={modal} closeModal={selectModal} />
      <div className={landingStyles.landingOne}>
        <RegisterBanner modal={modal} openModal={selectModal} />
      </div>
      <div className={landingStyles.landingTwo}>
        <LandingTwo modal={modal} openModal={selectModal} />
      </div>
      <div className={landingStyles.landingThree}>
        <LandingThree />
      </div>
    </>
  );
}

export default Landing;
