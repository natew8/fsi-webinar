import React, { useContext, useState } from "react";
import { Context } from "../context/WebinarContext";
import modalStylesB from "./modalB.module.scss";
//Already retired, 1-5, 5-10, 10+
function ModalB(props) {
  const { surveyAnswers, webinarId, schedule } = useContext(Context);
  const [years, setYears] = useState("Already Retired");
  const [investment, setInvestment] = useState("<200k");
  const [focus, setFocus] = useState([]);
  const [comment, setComment] = useState("");

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
        <label forhtml="years">
          How close are you to retirement?
          <select
            defaultValue={years}
            onChange={handleYears}
            placeholder="select..."
            name="years"
            id="years"
          >
            <option value="Already Retired">Already retired</option>
            <option value="1-5 years">1 - 5 years</option>
            <option value="5-10 years">5 - 10 years</option>
            <option value="10 plus years">10+ years</option>
          </select>
        </label>
        <label forhtml="investment">
          Investable Assets Available
          <select
            defaultValue={investment}
            onChange={handleInvestment}
            placeholder="select..."
            name="investment"
            id="investment"
          >
            <option value="<200k">{"<200k"}</option>
            <option value="200k-500k">200k-500k</option>
            <option value=">500k">{">500k"}</option>
          </select>
        </label>
        <span className={modalStylesB.checkContainer}>
          <label>
            What are you primarily looking to get out of this class? (check all
            that apply)
            <label className={modalStylesB.checkLabel} forhtml="1">
              <input
                onChange={handleFocus}
                value="The pros and cons"
                type="checkbox"
                id="1"
              />
              The pros and cons of IRAs, Roth IRAs, 401ks, pension plans and
              Social Security
            </label>
            <label className={modalStylesB.checkLabel} forhtml="2">
              <input
                onChange={handleFocus}
                value="Nest Egg"
                type="checkbox"
                id="2"
              />
              Ways to ensure your nes egg lasts no matter how long you're
              retired.
            </label>
            <label className={modalStylesB.checkLabel} forhtml="3">
              <input
                onChange={handleFocus}
                value="Recent tax laws"
                type="checkbox"
                id="3"
              />
              Find out how recent tax law changes benefit you and potentially
              reduce your taxes
            </label>
            <label className={modalStylesB.checkLabel} forhtml="4">
              <input
                onChange={handleFocus}
                value="Pandemic"
                type="checkbox"
                id="4"
              />
              How has the recent pandemic impacted the market?
            </label>
          </label>
        </span>
        <label forhtml="textbox">
          Anything else you would like us to cover?
          <textarea onChange={handleComment} id="textbox" />
        </label>
      </span>
      <button onClick={handleSubmit} className={modalStylesB.confirmButton}>
        Confirm Registration
      </button>
    </span>
  );

  function handleYears(e) {
    e.preventDefault();
    setYears(e.target.value);
    console.log(years);
  }

  function handleInvestment(e) {
    e.preventDefault();
    setInvestment(e.target.value);
  }
  function handleFocus(e) {
    e.stopPropagation();
    const index = focus.indexOf(e.target.value);
    e.target.checked ? focus.push(e.target.value) : focus.splice(index);
  }
  function handleComment(e) {
    e.stopPropagation();
    setComment(e.target.value);
  }
  function handleSubmit(e) {
    e.stopPropagation();
    const body = {
      years: years,
      focus: focus,
      comment: comment,
      webinarId: webinarId,
      schedule: schedule,
    };
    surveyAnswers(body);
  }
}

export default ModalB;
