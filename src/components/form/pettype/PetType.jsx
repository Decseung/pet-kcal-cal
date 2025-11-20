import React, { useState } from "react";
import "./PetType.css";

function PetType() {
  const [petType, setPetType] = useState("dog");

  const handlePetType = (e) => {
    setPetType(e.target.value);
  };
  return (
    <div className="pet-type">
      <span>반려동물</span>
      <div className="pet-type-input-area">
        <div
          className={`pettype-background-toggle ${
            petType === "cat" ? "cat" : ""
          }`}
        ></div>
        <label htmlFor="cat">
          고양이
          <input
            type="radio"
            id="cat"
            value="cat"
            name="petType"
            checked={petType === "cat"}
            onChange={handlePetType}
          />
        </label>
        <label htmlFor="dog">
          강아지
          <input
            type="radio"
            id="dog"
            value="dog"
            name="petType"
            checked={petType === "dog"}
            onChange={handlePetType}
          />
        </label>
      </div>
    </div>
  );
}

export default PetType;
