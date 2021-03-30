import React, { useContext } from "react";
import * as Yup from "yup";
//Components
import AppFormField from "./AppFormField";
import AppForm from "./AppForm";
import { Context } from "../context/WebinarContext";
import AppSubmitButton from "./AppSubmitButton";

//Style Modules
import formStyles from "./form.module.scss";
import RegisterFormPicker from "./RegisterFormPicker";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required()
    .min(4, "Must be at least four characters")
    .label("First Name"),
  last_name: Yup.string()
    .required()
    .min(4, "Must be at least four characters")
    .label("Last Name"),
  email: Yup.string().email().required().label("Email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Please enter a valid phone number")
    .required()
    .label("Phone Number"),
  schedule: Yup.number().required().label("Schedule"),
  webinar_id: Yup.number().required(),
});

function RegisterForm(props) {
  const { schedule, webinarId, registerUser } = useContext(Context);
  //
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    registerUser(values);
  };
  return (
    <span className={formStyles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          schedule: schedule,
          webinar_id: webinarId,
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField
          label="First Name *"
          name="first_name"
          type="text"
          id="firstName"
          placeholder="First Name"
        />
        <AppFormField
          label="Last Name *"
          name="last_name"
          type="text"
          id="lastName"
          placeholder="Last Name"
        />
        <AppFormField
          label="Email *"
          name="email"
          type="text"
          id="email"
          placeholder="Email"
        />
        <AppFormField
          label="Phone Number *"
          name="phone"
          type="text"
          id="phone"
          placeholder="(xxx) xxx-xxxx`"
        />
        <RegisterFormPicker name="schedule" />
        <AppSubmitButton title="Register" />
      </AppForm>
    </span>
  );
}

export default RegisterForm;
