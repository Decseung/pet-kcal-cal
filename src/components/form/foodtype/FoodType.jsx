import React, { useState } from "react";
import "./FoodType.css";

function FoodType() {
  const [foodType, setFoodType] = useState("mix");

  const handleFoodType = (e) => {
    setFoodType(e.target.value);
  };

  return (
    <div className="food-type">
      <span>급여 종류</span>
      <div className="food-type-input-area">
        <div
          className={`background-toggle ${
            basicInfo.foodType === "dry"
              ? "dry"
              : basicInfo.foodType === "mix"
              ? "mix"
              : "wet"
          }`}
        ></div>
        <label htmlFor="wet">
          습식
          <input
            type="radio"
            id="wet"
            value="wet"
            name="foodType"
            checked={foodType === "wet"}
            onChange={handleFoodType}
          />
        </label>
        <label htmlFor="dry">
          건식
          <input
            type="radio"
            id="dry"
            value="dry"
            name="foodType"
            checked={foodType === "dry"}
            onChange={handleFoodType}
          />
        </label>
        <label htmlFor="mix">
          혼합
          <input
            type="radio"
            id="mix"
            value="mix"
            name="foodType"
            checked={foodType === "mix"}
            onChange={handleFoodType}
          />
        </label>
      </div>
    </div>
  );
}

export default FoodType;
