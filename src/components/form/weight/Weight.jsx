import React, { useState } from "react";
import "./Weight.css";

function Weight() {
  const [weight, setWeight] = useState(0);

  const handleWeight = (e) => {
    setWeight(Number(e.target.value));
  };
  return (
    <div className="weight">
      <span>체중</span>
      <div className="weight-input-area">
        <label htmlFor="weight">
          <input
            type="number"
            id="weight"
            value={Number(weight)}
            onChange={handleWeight}
          />
          <span>Kg</span>
        </label>
      </div>
    </div>
  );
}

export default Weight;
