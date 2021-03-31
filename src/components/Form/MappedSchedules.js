import React, { useContext } from "react";
import { useFormikContext } from "formik";
import Select from "react-select";
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
    height: "2.5rem",
  }),
};

export default function MappedSchedules({ onChange, placeholder }) {
  //Context//
  const { schedules } = useContext(Context);

  const { values } = useFormikContext();

  //Sort and Map schedules//
  const sortedSchedules = schedules
    .sort((a, b) => {
      return a.schedule - b.schedule;
    })
    .map((sched) => {
      return { value: sched.schedule, label: sched.comment };
    });
  return (
    <>
      {schedules.length === 1 ? (
        <h1 className={mappedStyles.singleSchedule}>{schedules[0].comment}</h1>
      ) : (
        <label>
          Please pick a date *
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
