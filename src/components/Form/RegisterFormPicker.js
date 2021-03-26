import React from "react";
import { useFormikContext } from "formik";
//Components
import MappedSchedules from "../Modal/MappedSchedules";
import ErrorMessage from "./ErrorMessage";

function RegisterFormPicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <MappedSchedules
        onChange={(e) => setFieldValue(e.value)}
        placeholder="Please Choose a date..."
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default RegisterFormPicker;
