import React, { useContext } from "react";
import Select from "react-select";
import dayjs from "dayjs";
//Components
import { Context } from "../context/WebinarContext";
//Style Modules
import mappedStyles from "./mapped.module.scss";

const styles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    outline: "none",
    height: "2.7rem",
  }),
};

export default function MappedSchedules({ onChange, placeholder }) {
  //Context//
  const { schedules, pickedDate } = useContext(Context);

  //Sort and Map schedules//
  const sortedSchedules = schedules
    .sort((a, b) => {
      return a.date - b.date;
    })
    .map((sched) => {
      return {
        value: sched.schedule,
        label: dayjs(sched.date).format("dddd, DD MMMM YYYY, hh:mm A"),
      };
    });
  return (
    <>
      {schedules.length === 1 ? (
        <h1 className={mappedStyles.singleSchedule}>{schedules[0].comment}</h1>
      ) : (
        <label>
          Webinar Schedule *
          <Select
            onChange={onChange}
            isSearchable
            styles={styles}
            options={sortedSchedules}
            placeholder={placeholder}
          />
        </label>
      )}
    </>
  );
}
