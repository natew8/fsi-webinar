import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export function WebinarProvider(props) {
  const [webinarId, setWebinarId] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [webinarDate, setWebinarDate] = useState("");
  const [presenter, setPresenter] = useState({});
  const [name, setName] = useState("");

  //User Registration State//
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState(0);

  const webinarKey = process.env.REACT_APP_WEBINAR_KEY;

  useEffect(() => {
    axios
      .post("/api/webinar")
      .then((res) => {
        console.log(res.data.webinar);
        setPresenter(res.data.webinar.presenters[0]);
        setWebinarId(res.data.webinar.webinar_id);
        setSchedules(res.data.webinar.schedules);
        setName(res.data.webinar.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const registerUser = () => {
    axios
      .post(`/api/webinar/register/${firstName}${lastName}${email}${phone}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Context.Provider
      value={{
        webinarId,
        schedules,
        webinarDate,
        presenter,
        firstName,
        lastName,
        email,
        phone,
        name,
        schedule,
        registerUser,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setSchedule,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
