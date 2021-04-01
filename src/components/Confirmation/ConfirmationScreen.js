import React from "react";
//Style Module
import confirmStyles from "./confirmation.module.scss";
function ConfirmationScreen(props) {
  return (
    <div className={confirmStyles.bounds}>
      <div className={confirmStyles.container}>
        <h1>You're Registered!</h1>
        <h2>We can't wait to see you there!</h2>
      </div>
    </div>
  );
}

export default ConfirmationScreen;
