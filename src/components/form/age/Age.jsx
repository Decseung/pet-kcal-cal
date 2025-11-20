import React, { useState } from "react";
import "./Age.css";

function Age() {
  const [age, setAge] = useState("");

  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className="age">
      <span>나이</span>
      <div className="age-input-area">
        <label htmlFor="age">
          <input type="number" id="age" value={age} onChange={handleAgeInput} />
          <span>세</span>
        </label>
      </div>
    </div>
  );
}

export default Age;
