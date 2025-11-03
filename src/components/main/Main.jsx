import React, { createContext, useEffect, useState } from "react";
import "./Main.css";
import PetType from "../pettype/PetType";
import Neutering from "../neutering/Neutering";
import Age from "../age/Age";
import Activity from "../activity/Activity";
import Weight from "../weight/Weight";
import DailyAmount from "../dailyamount/DailyAmount";
import FoodType from "../foodtype/FoodType";
import SearchFood from "../searchfood/SearchFood";

export const BasicInfoContext = createContext();

function Main() {
  const [basicInfo, setBasicInfo] = useState({
    petType: "dog",
    neutering: "true",
    age: "",
    activity: "high",
    weight: "",
    dailyAmount: "",
    foodType: "wet",
  });

  return (
    <main>
      <h3>Pet Food Calculator</h3>
      <div className="input-form">
        <BasicInfoContext.Provider value={{ basicInfo, setBasicInfo }}>
          <div className="basic-info-area">
            <PetType />
            <Neutering />
            <Age />
            <Activity />
          </div>
          <div className="intermediate-input-area">
            <Weight />
            <DailyAmount />
            <FoodType />
          </div>
          <div className="search-food-input-area">
            <SearchFood />
          </div>
        </BasicInfoContext.Provider>
      </div>
    </main>
  );
}

export default Main;
