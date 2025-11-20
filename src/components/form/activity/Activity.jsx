import React, { useState } from "react";
import "./Activity.css";

function Activity() {
  const [activity, setAcitivity] = useState("low");

  const handleActivity = (e) => {
    setAcitivity(e.target.value);
  };

  return (
    <div className="activity">
      <span>활동량</span>
      <div className="activity-input-area">
        <div
          className={`activity-background-toggle ${
            activity === "high" ? "high" : activity === "low" ? "low" : "medium"
          }`}
        ></div>
        <label htmlFor="high-activity">
          높음
          <input
            type="radio"
            id="high-activity"
            value="high"
            name="activity"
            checked={activity === "high"}
            onChange={handleActivity}
          />
        </label>
        <label htmlFor="medium-activity">
          중간
          <input
            type="radio"
            id="medium-activity"
            value="medium"
            name="activity"
            checked={activity === "medium"}
            onChange={handleActivity}
          />
        </label>
        <label htmlFor="low-activity">
          낮음
          <input
            type="radio"
            id="low-activity"
            value="low"
            name="activity"
            checked={activity === "low"}
            onChange={handleActivity}
          />
        </label>
      </div>
    </div>
  );
}

export default Activity;
