import React, { useContext, useEffect } from "react";
import "./DailyAmount.css";
import { BasicInfoContext } from "../main/Main";

function DailyAmount() {
  const { basicInfo, setbasicInfo } = useContext(BasicInfoContext);

  const handleAmount = (e) => {
    setbasicInfo({
      ...basicInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="dailyamount">
      <span>하루 급여량</span>
      <div className="dailyamount-input-area">
        <label htmlFor="dailyamount">
          <input
            type="number"
            id="dailyamount"
            value={basicInfo.dailyAmount}
            onChange={handleAmount}
          />
        </label>
        <span>끼</span>
      </div>
    </div>
  );
}

export default DailyAmount;
