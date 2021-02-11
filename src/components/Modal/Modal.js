import React, { useContext } from "react";
import { Context } from "../context/WebinarContext";
import modalStyles from "./modal.module.scss";
import moment from "moment";

function Modal(props) {
  const context = useContext(Context);
  const { webinarId, schedule, webinarDate, presenter } = context;
  console.log(presenter);
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
        <div className={modalStyles.div}>&times;</div>
        <span className={modalStyles.header}>
          <h1>Thank you for your interest in this event</h1>
          <h2>Please fill out the form below to RSVP</h2>
        </span>
        <span>
          <span>
            <img
              src="https://static.wixstatic.com/media/e82ded_9bab553a72f44243a0e9b02ff806bf25~mv2.png/v1/fill/w_266,h_130,al_c,q_85,usm_0.66_1.00_0.01/set%20sail%20white%20lettering.webp"
              alt="something"
            />
            <h2>Social Security Workshop</h2>
            {/* <h2>
              Presented By:<h1>{presenter.name}</h1>
            </h2> */}
            <h1>{`${moment(webinarDate).format("MMMM Do YYYY")} @ ${moment(
              webinarDate
            ).format("hh:mm")}`}</h1>
          </span>
          <div className={modalStyles.line}></div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              First Name *
              <input id="firstName" type="text" />
            </label>
            <label>
              Last Name *
              <input id="lastName" type="text" />
            </label>
            <label>
              Email *
              <input id="email" type="email" />
            </label>
            <label>
              Phone Number *
              <input />
            </label>
            <button>Register</button>
          </form>
        </span>
        <h3>We can't wait to see you there!</h3>
      </span>
    </div>
  );
}

export default Modal;
