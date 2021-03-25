import React, { useContext } from "react";
import { Context } from "../context/WebinarContext";
import mappedStyles from "./mapped.module.scss";
import Select from "react-select";

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

export default function MappedSchedules() {
  //Context//
  const { schedules, setSchedule, schedule } = useContext(Context);

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
            onChange={handleInput}
            isSearchable={false}
            placeholder={sortedSchedules[0].label}
            defaultValue={schedule}
            styles={styles}
            options={sortedSchedules}
          />
        </label>
      )}
    </>
  );

  function handleInput(e) {
    setSchedule(e.value);
  }
}
