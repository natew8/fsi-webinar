//Libraries
import React from "react";
import { useFormikContext } from "formik";
//Components
import ErrorMessage from "./ErrorMessage";
//Style Modules
import formStyles from "./form.module.scss";

function AppFormField({ name, width = "100%", ...props }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <span className={formStyles.formField}>
      <label htmlFor={props.id}>
        {props.label}
        <input
          onBlur={() => setFieldTouched(name)}
          onChange={(e) => setFieldValue(name, e.target.value)}
          value={values[name]}
          width={width}
          {...props}
        />
      </label>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </span>
  );
}

export default AppFormField;
