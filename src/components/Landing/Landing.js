import React, { useContext, useState } from "react";
import { Context } from "../context/WebinarContext";
import Modal from "../Modal/Modal";
import landingStyles from "./landing.module.scss";
import RegisterBanner from "./RegisterBanner/RegisterBanner";

function Landing(props) {
  const { loading, setLoading } = useContext(Context);
  //Modal
  const [modal, setModal] = useState(false);
  const selectModal = () => setModal(!modal);

  return (
    <>
      {!loading && <Modal modal={modal} closeModal={selectModal} />}
      <div className={landingStyles.landingOne}>
        <RegisterBanner modal={modal} openModal={selectModal} />
      </div>
      <div></div>
    </>
  );
}

export default Landing;
