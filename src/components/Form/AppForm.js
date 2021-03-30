//Libraries
import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, validationSchema, onSubmit, children }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
