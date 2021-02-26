import React from "react";
import modalStylesB from "./modalB.module.scss";
//Already retired, 1-5, 5-10, 10+
function ModalB(props) {
  return (
    <span
      className={modalStylesB.modalB}
      aria-hidden="true"
      role="button"
      onClick={(e) => e.stopPropagation()}
    >
      <h1>You're almost there!</h1>
      <h2>
        Before we confirm your spot please answer these three questions so your
        instructor can better personalize the presentation
      </h2>
      <h3>All responses will be anonymous</h3>
      <hr></hr>
      <span className={modalStylesB.questionsContainer}>
        <label forHtml="years">
          How close are you to retirement?
          <select placeholder="select..." name="years" id="years">
            <option selected disabled hidden value="">
              - -
            </option>
            <option value="Already Retired">Already retired</option>
            <option value="1-5 years">1 - 5 years</option>
            <option value="5-10 years">5 - 10 years</option>
            <option value="10 plus years">10+ years</option>
          </select>
        </label>
        <span className={modalStylesB.checkContainer}>
          <label>
            What are you primarily looking to get out of this class? (check all
            that apply)
            <label className={modalStylesB.checkLabel} forHtml="1">
              <input value="The pros and cons" type="checkbox" id="1" />
              The pros and cons of IRAs, Roth IRAs, 401ks, pension plans and
              Social Security
            </label>
            <label className={modalStylesB.checkLabel} forHtml="2">
              <input value="Nest Egg" type="checkbox" id="2" />
              Ways to ensure your nes egg lasts no matter how long you're
              retired.
            </label>
            <label className={modalStylesB.checkLabel} forHtml="3">
              <input value="Recent tax laws" type="checkbox" id="3" />
              Find out how recent tax law changes benefit you and potentially
              reduce your taxes
            </label>
            <label className={modalStylesB.checkLabel} forHtml="4">
              <input value="Pandemic" type="checkbox" id="4" />
              How has the recent pandemic impacted the market?
            </label>
          </label>
        </span>
        <label forHtml="textbox">
          Anything else you would like us to cover?
          <textarea id="textbox" />
        </label>
      </span>
      <button className={modalStylesB.confirmButton}>
        Confirm Registration
      </button>
    </span>
  );
}

export default ModalB;
