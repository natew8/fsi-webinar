import React, { useContext } from "react";
import * as Yup from "yup";
//Components
import AppFormField from "./AppFormField";
import Picker from "./RegisterFormPicker";
import AppForm from "./AppForm";
import { Context } from "../context/WebinarContext";
import AppSubmitButton from "./AppSubmitButton";
import MappedSchedules from "../Modal/MappedSchedules";

//Style Modules
import formStyles from "./form.module.scss";
import RegisterFormPicker from "./RegisterFormPicker";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .min(4, "Must be at least four characters")
    .label("First Name"),
  lastName: Yup.string()
    .required()
    .min(4, "Must be at least four characters")
    .label("Last Name"),
  email: Yup.string().email().required().label("Email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Please enter a valid phone number")
    .required()
    .label("Phone Number"),
  schedule: Yup.number().required().label("Schedule"),
});

function RegisterForm(props) {
  const { schedule } = useContext(Context);
  //
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 3000);
  };
  return (
    <div className={formStyles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          schedule: schedule,
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField
          label="First Name *"
          name="firstName"
          type="text"
          id="firstName"
          placeholder="First Name"
        />
        <AppFormField
          label="Last Name *"
          name="lastName"
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
    </div>
  );
}

export default RegisterForm;
