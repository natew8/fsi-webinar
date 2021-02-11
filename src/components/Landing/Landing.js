import React, { useState } from "react";
import Modal from "../Modal/Modal";
import landingStyles from "./landing.module.scss";
import RegisterBanner from "./RegisterBanner/RegisterBanner";

function Landing(props) {
  //Modal
  const [modal, setModal] = useState(false);
  const selectModal = () => setModal(!modal);
  return (
    <>
      <Modal modal={modal} closeModal={selectModal} />
      <div className={landingStyles.landingOne}>
        <RegisterBanner modal={modal} openModal={selectModal} />
      </div>
      <div></div>
    </>
  );
}

export default Landing;
