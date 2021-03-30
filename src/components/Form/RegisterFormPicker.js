import React from "react";
import { useFormikContext } from "formik";
//Components
import MappedSchedules from "./MappedSchedules";
import ErrorMessage from "./ErrorMessage";

function RegisterFormPicker({ name }) {
  const { errors, touched, setFieldValue } = useFormikContext();

  return (
    <>
      <MappedSchedules
        onChange={(e) => setFieldValue(name, e.value)}
        name={name}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default RegisterFormPicker;
