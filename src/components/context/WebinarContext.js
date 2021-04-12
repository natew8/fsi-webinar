import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export function WebinarProvider(props) {
  //Webinar URL Query
  const query = new URLSearchParams(window.location.search);
  const query_id = query.get("webinarId");

  // Webinar Info State
  const [webinarId, setWebinarId] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [presenters, setPresenters] = useState([]);
  const [twoWebinars, setTwoWebinars] = useState(true);

  //User Registration State//
  const [registerBody, setRegisterBody] = useState({});
  const [schedule, setSchedule] = useState(0);
  const [scheduleDateForDb, setScheduleDateForDb] = useState("");

  //Modal State
  const [modalA, setModalA] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  //Error Message
  const [error, setError] = useState(false);
  //Loading State
  const [loading, setLoading] = useState(true);

  //ConfirmationState
  const [finished, setFinished] = useState(false);
  const [webinarName, setWebinarName] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [webinarLink, setWebinarLink] = useState("");
  const [presenterName, setPresenterName] = useState("");

  useEffect(() => {
    axios
      .post("/api/everWebinars")
      .then((res) => {
        const [webinar_id] = res.data.webinars.filter(
          (nar) => nar.webinar_id === +query_id
        );
        axios
          .post("/api/webinar", webinar_id)
          .then((res) => {
            if (res.data.status !== "success") {
              setError(true);
              setLoading(false);
            }
            setWebinarName(res.data.webinar.name);
            setPresenters(res.data.webinar.presenters[0]);
            setWebinarId(res.data.webinar.webinar_id);
            res.data.webinar.schedules.length !== 2 && setTwoWebinars(false);
            setSchedules(res.data.webinar.schedules);
            setSchedule(res.data.webinar.schedules[0]?.schedule);
            setLoading(false);
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
          });
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const registerUser = (body) => {
    setRegisterBody(body);
    setModalA(false);
    axios
      .post("/api/webinar/register", body)
      .then((res) => {
        setScheduleDateForDb(
          schedules
            .filter((sch) => sch.schedule === +res.data.user.schedule)
            .map((ule) => ule.date)
        );
        if (res.data.status !== "success") {
          setError(true);
          setLoading(false);
        }
        setWebinarLink(res.data.user.live_room_url);
        setRegisteredDate(res.data.user.date);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const surveyAnswers = (body) => {
    setSubmitting(true);
    axios
      .post("/api/survey", {
        ...body,
        ...registerBody,
        scheduleDate: scheduleDateForDb[0],
        webinar_name: webinarName,
      })
      .then((res) => {
        if (res.statusText !== "ok") {
          setError(true);
          setSubmitting(false);
        }
        console.log(res)
        setModalA(true);
        setFinished(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Context.Provider
      value={{
        webinarId,
        registeredDate,
        webinarLink,
        schedules,
        presenters,
        webinarName,
        schedule,
        loading,
        twoWebinars,
        modalA,
        submitting,
        finished,
        error,
        presenterName,
        setPresenterName,
        setError,
        setSubmitting,
        setFinished,
        surveyAnswers,
        setModalA,
        setLoading,
        registerUser,
        setSchedule,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
