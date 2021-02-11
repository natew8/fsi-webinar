import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import moment from "moment";

export const Context = createContext(null);

export function WebinarProvider(props) {
  const [webinarId, setWebinarId] = useState(0);
  const [schedule, setSchedule] = useState(0);
  const [webinarDate, setWebinarDate] = useState("");
  const [presenter, setPresenter] = useState({});

  const webinarKey = process.env.REACT_APP_WEBINAR_KEY;

  useEffect(() => {
    axios
      .post(
        `https://api.webinarjam.com/webinarjam/webinar?api_key=${webinarKey}&webinar_id=45`
      )
      .then((res) => {
        console.log(res.data.webinar);
        setPresenter(res.data.webinar.presenters[0]);
        setWebinarId(res.data.webinar.webinar_id);
        setSchedule(res.data.webinar.schedules[0].schedule);
        setWebinarDate(res.data.webinar.schedules[0].date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Context.Provider value={{ webinarId, schedule, webinarDate, presenter }}>
      {props.children}
    </Context.Provider>
  );
}
