import React, { useState } from "react";
import "./Neutering.css";

function Neutering() {
  const [neutering, setNeutering] = useState(false);

  const handleNeuteringInput = (e) => {
    setNeutering((prev) => !prev);
  };

  return (
    <div className="neutering">
      <span>중성화 여부</span>
      <div className="neutering-input-area">
        <div
          className={`neutering-background-toggle ${
            neutering === true ? "true" : "false"
          }`}
        ></div>
        <label htmlFor="neutering">
          O
          <input
            type="radio"
            id="neutering"
            value={true}
            name="neutering"
            checked={neutering === true}
            onChange={handleNeuteringInput}
          />
        </label>
        <label htmlFor="not-neutering">
          X
          <input
            type="radio"
            id="not-neutering"
            value={false}
            name="neutering"
            checked={neutering === false}
            onChange={handleNeuteringInput}
          />
        </label>
      </div>
    </div>
  );
}

export default Neutering;
