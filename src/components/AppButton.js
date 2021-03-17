import React from "react";
import buttonStyles from "./button.module.scss";

function AppButton({ title, onClick, style, value }) {
  return (
    <button
      value={value}
      style={style}
      className={buttonStyles.button}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default AppButton;
