import React from "react";
//Style Module
import confirmStyles from "./confirmation.module.scss";
function ConfirmationScreen(props) {
  return (
    <div className={confirmStyles.container}>
      <h1>You're Registered!</h1>
    </div>
  );
}

export default ConfirmationScreen;
