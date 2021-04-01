import React, { useContext, useState } from "react";
import AppButton from "../AppButton";
import { Context } from "../context/WebinarContext";
import AppCheckList from "./AppCheckList";
import modalStylesB from "./modalB.module.scss";
//Already retired, 1-5, 5-10, 10+
function ModalB(props) {
  const { surveyAnswers, presenters, submitting } = useContext(Context);
  const [years, setYears] = useState("Already Retired");
  const [investment, setInvestment] = useState("<200k");
  const [focus] = useState([]);
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
          <AppCheckList onChange={handleFocus} />
        </span>
        <label forhtml="textbox">
          Anything else you would like us to cover?
          <textarea onChange={handleComment} id="textbox" />
        </label>
      </span>
      <AppButton
        style={{ width: "100%" }}
        title={submitting ? "Submitting Info..." : "Confirm Registration!"}
        onClick={handleSubmit}
      />
    </span>
  );

  function handleYears(e) {
    e.preventDefault();
    setYears(e.target.value);
  }

  function handleInvestment(e) {
    e.preventDefault();
    setInvestment(e.target.value);
  }
  function handleFocus(e) {
    e.stopPropagation();
    const index = focus.indexOf(e.target.value);
    e.target.checked ? focus.push(e.target.value) : focus.splice(index, 1);
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
      presenter: presenters.name,
    };
    surveyAnswers(body);
  }
}

export default ModalB;
