//Libraries
import React, { useContext } from "react";
//Components
import { Context } from "../../context/WebinarContext";
import AppButton from "../../AppButton";
//Styles
import landingTwoStyles from "./landingTwo.module.scss";
//Dependencies
import check from "../../../assets/icons/check-circle-outline-512.webp";

const listItems = [
  "Current economic volatility and what it means for you and your retirement",
  "Optimization techniques to get the most from your Social Security",
  "Tax-friendly ways to withdraw your retirement income",
  "How taxes can affect retirement income, Social Security and your surviving spouse",
  "How to protect against inflation, taxes and longevity so you never outlive your money",
  "How you could reduce or potentially avoid any unnecessary taxes",
];

function LandingTwo(props) {
  const {
    schedules,
    schedule,
    twoWebinars,
    setPickedDate,
    setSchedule,
  } = useContext(Context);
  const { openModal, modal } = props;

  function handleOpenModal(e) {
    e.stopPropagation();
    openModal();
    setPickedDate(e.target.value);
    setSchedule(+e.target.value);
  }

  const mappedList = listItems.map((item, index) => {
    return (
      <span className={landingTwoStyles.listItem} key={index}>
        <img src={check} alt="check" />
        <p>{item}</p>
      </span>
    );
  });

  return (
    <div className={landingTwoStyles.landingContainer}>
      <h1 className={landingTwoStyles.landingHeader}>
        What does the event cover?
      </h1>
      <h2 className={landingTwoStyles.landingSubHeader}>
        Here are just a few of the topics we will cover in this workshop!
      </h2>
      <span className={landingTwoStyles.listBlock}>{mappedList}</span>
      <span className={landingTwoStyles.buttonBox}>
        {/* {!twoWebinars ? ( */}
        <AppButton title={"Register Today!"} onClick={handleOpenModal} />
        {/* ) : (
          <>
            <AppButton
              value={schedules[0].schedule}
              title={schedules[0].comment}
              onClick={handleOpenModal}
            />
            <h1 className={landingTwoStyles.or}>or</h1>
            <AppButton
              value={schedules[1].schedule}
              title={schedules[1].comment}
              onClick={handleOpenModal}
            />
          </>
        )} */}
      </span>
      <h1>
        This is one of the most powerful free events we've ever hosted!
        <br /> Relax, Have Fun, and Be Ready!
      </h1>
    </div>
  );
}

export default LandingTwo;
