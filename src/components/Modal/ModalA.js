//Libraries
import React, { useContext } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
//Components
import MappedSchedules from "./MappedSchedules";
import { Context } from "../context/WebinarContext";
import AppLogo from "../AppLogo";
//Assets
import whiteLogo from "../../assets/fsiLogoWhite.png";
//Style Modules
import modalStyles from "./modal.module.scss";

function ModalA(props) {
  const { closeModal } = props;
  const {
    pickedDate,
    webinarId,
    presenter,
    name,
    schedules,
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

  const filteredSchedule = schedules.filter(
    (date) => date.schedule === +pickedDate
  );

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
        <span className={modalStyles.scheduleContainer}>
          <AppLogo src={whiteLogo} alt="FSI Logo White" />
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
          {pickedDate ? (
            <h1 className={modalStyles.pickedDate}>
              {filteredSchedule[0].comment}
            </h1>
          ) : (
            <label>
              Please Choose a date *
              <MappedSchedules />
            </label>
          )}
          <button onClick={handleRegisterUser}>Register</button>
        </form>
      </span>
      <h3>We can't wait to see you there!</h3>
    </span>
  );

  function handlePhone(e) {
    setPhone(e);
  }

  function handleRegisterUser(e) {
    e.stopPropagation();
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

export default ModalA;
