import React from "react";
//Components
//Assets
import check from "../../../assets/icons/check-circle-outline-512.webp";

const listItems = [
  "The pros and cons of Roth conversions.",
  "The pros and cons of IRAs, Roth IRAs, 401ks, pension plans and Social Security.",
  "Find out how recent tax law changes benefit you and potentially reduce your taxes!",
  "How has the recent pandemic impacted the market - and can you avoid more losses?",
];

function AppBulletList() {
  const mappedBullet = listItems.map((item, index) => {
    return (
      <span key={index}>
        <img src={check} alt="check icon" />
        <p>{item}</p>
      </span>
    );
  });
  return <div>{mappedBullet}</div>;
}

export default AppBulletList;
