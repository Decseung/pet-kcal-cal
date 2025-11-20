import React, { useState } from "react";
import "./DailyAmount.css";

function DailyAmout() {
  const [dailyAmount, setDailyAmount] = useState(0);

  const handleAmount = (e) => {
    setDailyAmount(Number(e.target.value));
  };
  return (
    <div className="dailyamount">
      <span>하루 급여량</span>
      <div className="dailyamount-input-area">
        <label htmlFor="dailyAmount">
          <input
            type="number"
            id="dailyAmount"
            value={dailyAmount}
            onChange={handleAmount}
          />
        </label>
        <span>끼</span>
      </div>
    </div>
  );
}

export default DailyAmout;
