//Libraries
import React from "react";
import "react-phone-input-2/lib/style.css";
//Components
import AppLogo from "../AppLogo";
import RegisterForm from "../Form/RegisterForm";
//Assets
import whiteLogo from "../../assets/logo/fsiLogoWhite.png";
//Style Modules
import modalStyles from "./modal.module.scss";

function ModalA(props) {
  const { closeModal } = props;

  return (
    <span
      aria-hidden="true"
      role="button"
      onClick={(e) => e.stopPropagation()}
      className={modalStyles.formContainer}
    >
      <div onClick={closeModal} className={modalStyles.div}>
        &times;
      </div>
      <span className={modalStyles.header}>
        <h1>Thank you for your interest in this event</h1>
        <h2>Please fill out the form below to register</h2>
      </span>
      <span>
        <AppLogo
          width="45%"
          style={{ height: 200, marginTop: "6rem" }}
          src={whiteLogo}
          alt="FSI Logo White"
        />
        <div className={modalStyles.line}></div>
        <RegisterForm />
      </span>
    </span>
  );
}

export default ModalA;
