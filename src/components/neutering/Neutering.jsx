import React, { useContext, useEffect } from "react";
import "./Neutering.css";
import { BasicInfoContext } from "../main/Main";

function Neutering() {
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);

  const handleNeuteringInput = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="neutering">
      <span>중성화 여부</span>
      <div className="neutering-input-area">
        <div
          className={`background-toggle ${
            basicInfo.neutering === "true" ? "true" : "false"
          }`}
        ></div>
        <label htmlFor="neutering">
          O
          <input
            type="radio"
            id="neutering"
            value="true"
            name="neutering"
            checked={basicInfo.neutering === "true"}
            onChange={handleNeuteringInput}
          />
        </label>
        <label htmlFor="not-neutering">
          X
          <input
            type="radio"
            id="not-neutering"
            value="false"
            name="neutering"
            checked={basicInfo.neutering === "false"}
            onChange={handleNeuteringInput}
          />
        </label>
      </div>
    </div>
  );
}

export default Neutering;
