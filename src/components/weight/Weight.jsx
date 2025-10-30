import React, { useContext } from "react";
import "./Weight.css";
import { BasicInfoContext } from "../main/Main";

function Weight() {
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);

  const handleWeight = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="weight">
      <span>체중</span>
      <div className="weight-input-area">
        <label htmlFor="weight">
          <input
            type="number"
            id="weight"
            value={basicInfo.weight}
            onChange={handleWeight}
          />
        </label>
      </div>
    </div>
  );
}

export default Weight;
