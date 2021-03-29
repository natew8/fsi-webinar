import React from "react";
import { useFormikContext } from "formik";
//Components
import MappedSchedules from "./MappedSchedules";
import ErrorMessage from "./ErrorMessage";

function RegisterFormPicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  console.log(values);
  return (
    <>
      <MappedSchedules
        onChange={(e) => setFieldValue(name, e.value)}
        placeholder="Please Choose a date..."
        name={name}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default RegisterFormPicker;
