import React, { useContext } from "react";
import "./Age.css";
import { BasicInfoContext } from "../main/Main";

function Age() {
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);

  const handleAgeInput = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="age">
      <span>나이</span>
      <div className="age-input-area">
        <label htmlFor="age">
          <input
            type="number"
            id="age"
            value={basicInfo.age}
            onChange={handleAgeInput}
          />
        </label>
      </div>
    </div>
  );
}

export default Age;
