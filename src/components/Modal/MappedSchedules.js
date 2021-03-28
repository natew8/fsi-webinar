import React, { useContext } from "react";
import { useFormikContext } from "formik";
import Select from "react-select";
//Components
import { Context } from "../context/WebinarContext";
import mappedStyles from "./mapped.module.scss";

const styles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    outline: "none",
  }),
};

export default function MappedSchedules({ onChange, placeholder, name }) {
  //Context//
  const { schedules, schedule } = useContext(Context);

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
            isSearchable={false}
            placeholder={placeholder}
            defaultValue={values}
            styles={styles}
            options={sortedSchedules}
          />
        </label>
      )}
    </>
  );
}
