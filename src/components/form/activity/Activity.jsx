import React from "react";
import "./Activity.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function Activity() {
  const [form] = useAtom(formAtom);

  const { handleFormInput } = useFormHandler();

  return (
    <div className="activity">
      <span>활동량</span>
      <div className="activity-input-area">
        <div
          className={`activity-background-toggle ${
            form.activity === "high"
              ? "high"
              : form.activity === "low"
              ? "low"
              : "medium"
          }`}
        ></div>
        <label htmlFor="high-activity">
          높음
          <input
            type="radio"
            id="high-activity"
            value="high"
            name="activity"
            checked={form.activity === "high"}
            onChange={handleFormInput("activity")}
          />
        </label>
        <label htmlFor="medium-activity">
          중간
          <input
            type="radio"
            id="medium-activity"
            value="medium"
            name="activity"
            checked={form.activity === "medium"}
            onChange={handleFormInput("activity")}
          />
        </label>
        <label htmlFor="low-activity">
          낮음
          <input
            type="radio"
            id="low-activity"
            value="low"
            name="activity"
            checked={form.activity === "low"}
            onChange={handleFormInput("activity")}
          />
        </label>
      </div>
    </div>
  );
}

export default Activity;
