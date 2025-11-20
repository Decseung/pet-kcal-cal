import React from "react";
import "./CalculatorForm.css";
import PetType from "./pettype/PetType";
import Neutering from "./neutering/Neutering";
import Age from "./age/Age";
import Activity from "./activity/Activity";
import Weight from "./weight/Weight";
import DailyAmount from "./dailyamout/DailyAmount";
import FoodType from "./foodtype/FoodType";
import SearchInput from "../searchinput/SearchInput";

function CalculatorForm() {
  return (
    <div className="calc-container">
      {/* Row 1 */}
      <div className="first-row-inputs">
        {/* Pet Type */}
        <PetType />
        {/* Neutered */}
        <Neutering />
        {/* Age */}
        <Age />
        {/* Activity */}
        <Activity />
      </div>
      {/* Row 2 */}
      <div className="second-row-inputs">
        {/* Weight */}
        <Weight />
        {/* Meals Per Day */}
        <DailyAmount />
        {/* Feeding Type */}
        <FoodType />
      </div>

      {/* Row 3: Search */}
      <div className="search-section">
        {/* Food Card */}
        <SearchInput />
      </div>
    </div>
  );
}

export default CalculatorForm;
