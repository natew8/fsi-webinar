import React, { useContext } from "react";
import { Context } from "../context/WebinarContext";
import mappedStyles from "./mapped.module.scss";
import Select from "react-select";

const styles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
};
function MappedSchedules(props) {
  const { schedules } = useContext(Context);

  function handleSelected(sched) {
    console.log(sched);
    sched.selected = true;
  }

  const sortedSchedules = schedules.sort((a, b) => {
    return a.schedule - b.schedule;
  });
  // .map((sched) => {
  //   return { value: sched.schedule, label: sched.comment };
  // });

  return (
    <Select
      isSearchable={false}
      placeholder={sortedSchedules[0]}
      defaultValue={sortedSchedules[0]}
      styles={styles}
      options={sortedSchedules}
    />
  );
}

export default MappedSchedules;
