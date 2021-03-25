import React from "react";
//Components
import questions from "./questions";
//Style Modules
import modalStylesB from "./modalB.module.scss";

function AppCheckList({ onChange }) {
  const mappedChecklist = questions.questions.map((question) => {
    return (
      <label className={modalStylesB.checkLabel} forhtml={question.id}>
        <input
          onChange={onChange}
          value={question.value}
          type="checkbox"
          id={question.id}
        />
        {question.question}
      </label>
    );
  });

  return (
    <label>
      What are you primarily looking to get out of this class? (check all that
      apply)
      {mappedChecklist}
    </label>
  );
}

export default AppCheckList;
