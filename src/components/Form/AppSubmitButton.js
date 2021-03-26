//Libraries
import React from "react";
import { useFormikContext } from "formik";
//Components
import AppButton from "../AppButton";

function AppSubmitButton({ title }) {
  const { submitForm } = useFormikContext();

  return <AppButton title={title} onClick={submitForm} />;
}

export default AppSubmitButton;
