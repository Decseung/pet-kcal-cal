import React, { useState } from "react";
import "./main.css";

function Main() {
  const [petType, setPetType] = useState("dog");

  const handlePetType = (e) => {
    console.log(petType);
    setPetType(e.target.value);
  };

  return (
    <main>
      <h3>Pet Food Calculator</h3>
      <div className="input-form">
        <div className="pet-type">
          <label htmlFor="dog">
            <p>강아지</p>
          </label>
          <input
            type="radio"
            id="dog"
            value="dog"
            checked
            onChange={handlePetType}
          />
          <label htmlFor="cat">
            <p>고양이</p>
          </label>
          <input type="radio" id="cat" value="cat" onChange={handlePetType} />
        </div>
      </div>
    </main>
  );
}

export default Main;
