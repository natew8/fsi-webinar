import React from "react";
//Style Modules
import confirmStyles from "./confirmation.module.scss";

function AppInfoText({ label, info, style }) {
  return (
    <div className={confirmStyles.infoTextContainer}>
      {label ? <p className={confirmStyles.label}>{label}</p> : null}
      <p style={style} className={confirmStyles.info}>
        {info}
      </p>
    </div>
  );
}

export default AppInfoText;
