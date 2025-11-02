import React, { useContext } from "react";
import "./Activity.css";
import { BasicInfoContext } from "../main/Main";

function Activity() {
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);
  console.log(basicInfo);
  const handleActivity = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="activity">
      <span>활동량</span>
      <div className="activity-input-area">
        <div
          className={`background-toggle ${
            basicInfo.activity === "high"
              ? "high"
              : basicInfo.activity === "low"
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
            checked={basicInfo.activity === "high"}
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
            checked={basicInfo.activity === "medium"}
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
            checked={basicInfo.activity === "low"}
            onChange={handleActivity}
          />
        </label>
      </div>
    </div>
  );
}

export default Activity;
