import React from "react"
import modalStyles from "./modal.module.scss"

function Modal(props) {
  const { closeModal, modal } = props

  function handleCloseModal(e) {
    e.stopPropagation()
    closeModal()
  }

  const divStyle = {
    display: modal ? "flex" : "none",
  }
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
        onClick={e => e.stopPropagation()}
        className={modalStyles.formContainer}
      >
        <span>
          <h1>Thank you for your interest in this event</h1>
          <h2>Please fill out the form below to RSVP</h2>
        </span>
        <span>
          <span>
            <h2>Event Registration</h2>
            <h2>Event Date</h2>
            <img alt="something" />
          </span>
          <form>
            <label>
              <input />
            </label>
            <label>
              <input />
            </label>
            <label>
              <input />
            </label>
            <label>
              <input />
            </label>
          </form>
        </span>
      </span>
    </div>
  )
}

export default Modal
