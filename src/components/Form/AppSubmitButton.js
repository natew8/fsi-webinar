//Libraries
import React from "react";
import { useFormikContext } from "formik";
//Components
import AppButton from "../AppButton";

function AppSubmitButton({ title }) {
  const { submitForm } = useFormikContext();

  return (
    <AppButton style={{ width: "100%" }} title={title} onClick={submitForm} />
  );
}

export default AppSubmitButton;
