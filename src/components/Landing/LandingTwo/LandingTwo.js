import React, { useContext } from "react";
import { Context } from "../../context/WebinarContext";
import landingTwoStyles from "./landingTwo.module.scss";
import check from "../../../check-circle-outline-512.webp";

const listItems = [
  "Current economic volatility and what it means for you and your retirement",
  "Optimization techniques to get the most from your Social Security",
  "Tax-friendly ways to withdraw your retirement income",
  "How taxes can affect retirement income, Social Security and your surviving spouse",
  "How to protect against inflation, taxes and longevity so you never outlive your money",
  "How you could reduce or potentially avoid any unnecessary taxes",
];

function LandingTwo(props) {
  const { schedules, schedule } = useContext(Context);

  const mappedList = listItems.map((item, index) => {
    return (
      <span className={landingTwoStyles.listItem} key={index}>
        <img src={check} alt="check" />
        <p>{item}</p>
      </span>
    );
  });
  console.log(mappedList);
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
        <button>register today!</button>
      </span>
    </div>
  );
}

export default LandingTwo;
