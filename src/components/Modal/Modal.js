import React, { useContext } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Context } from "../context/WebinarContext";
import modalStyles from "./modal.module.scss";
import MappedSchedules from "./MappedSchedules";

function Modal(props) {
  const {
    webinarId,
    presenter,
    name,
    schedule,
    firstName,
    lastName,
    email,
    phone,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    registerUser,
  } = useContext(Context);

  const { closeModal, modal } = props;

  function handleCloseModal(e) {
    e.stopPropagation();
    closeModal();
  }

  const divStyle = {
    display: modal ? "flex" : "none",
  };

  return (
    <div
      aria-hidden="true"
      style={divStyle}
      onClick={handleCloseModal}
      className={modalStyles.modal}
    >
      <span
        aria-hidden="true"
        role="button"
        onClick={(e) => e.stopPropagation()}
        className={modalStyles.formContainer}
      >
        <div onClick={handleCloseModal} className={modalStyles.div}>
          &times;
        </div>
        <span className={modalStyles.header}>
          <h1>Thank you for your interest in this event</h1>
          <h2>Please fill out the form below to register</h2>
        </span>
        <span>
          <span className={modalStyles.scheduleContainer}>
            <img
              src="https://static.wixstatic.com/media/e82ded_9bab553a72f44243a0e9b02ff806bf25~mv2.png/v1/fill/w_266,h_130,al_c,q_85,usm_0.66_1.00_0.01/set%20sail%20white%20lettering.webp"
              alt="something"
            />
          </span>
          <div className={modalStyles.line}></div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label forhtml="firstName">
              First Name *
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                prefix="$"
                id="firstName"
                type="text"
              />
            </label>
            <label forhtml="lastName">
              Last Name *
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                type="text"
              />
            </label>
            <label forhtml="email">
              Email *
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
              />
            </label>
            <label forhtml="phone">
              Phone Number *
              <PhoneInput
                required
                value={phone}
                onChange={handlePhone}
                inputClass={modalStyles.phoneInput}
                disableDropdown
                dropdownClass={modalStyles.dropdown}
                disableCountryCode
                label={false}
                country={"us"}
                placeholder="(xxx) xxx-xxxx"
              />
            </label>
            <label>
              Please Choose a date *
              <MappedSchedules />
            </label>
            <button onClick={handleRegisterUser}>Register</button>
          </form>
        </span>
        <h3>We can't wait to see you there!</h3>
      </span>
    </div>
  );

  function handlePhone(e) {
    setPhone(e);
  }

  function handleRegisterUser() {
    const body = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      schedule: schedule,
      webinar_id: webinarId,
    };
    registerUser(body);
  }
}

export default Modal;
