import React, { useContext } from "react";
import "./DailyAmount.css";
import { BasicInfoContext } from "../main/Main";

function DailyAmount() {
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);

  const handleAmount = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="dailyamount">
      <span>하루 급여량</span>
      <div className="dailyamount-input-area">
        <label htmlFor="dailyAmount">
          <input
            type="number"
            id="dailyAmount"
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
