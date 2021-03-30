import React from "react";
//Style Modules
import formStyles from "./form.module.scss";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <div className={formStyles.error}>{error}</div>;
}

export default ErrorMessage;
