import React, { useState, useEffect } from "react";
import "./CalculatorForm.css";
import PetType from "./pettype/PetType";
import Neutering from "./neutering/Neutering";
import Age from "./age/Age";
import Activity from "./activity/Activity";
import Weight from "./weight/Weight";
import DailyAmount from "./dailyamout/DailyAmount";
import FoodType from "./foodtype/FoodType";
import SearchInput from "../searchinput/SearchInput";
import UserSelect from "../userselect/UserSelect";

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

function CalculatorForm() {
  const [foodName, setFoodName] = useState("");
  const debouncedFoodName = useDebounce(foodName, 300);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const [openResult, setOpenResult] = useState(false);

  useEffect(() => {
    console.log("Debounced input:", debouncedFoodName);
  }, [debouncedFoodName]);

  useEffect(() => {
    if (!debouncedFoodName) {
      setData(null);
      return;
    }

    const SERVICE_KEY = import.meta.env.VITE_FOOD_API_KEY;

    const url = `http://api.data.go.kr/openapi/tn_pubr_public_nutri_material_info_api?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=1000&type=json&foodLv4Nm=${debouncedFoodName}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [debouncedFoodName]);

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
        <SearchInput
          foodName={foodName}
          setFoodName={setFoodName}
          data={data}
          userData={userData}
          setUserData={setUserData}
          openResult={openResult}
          setOpenResult={setOpenResult}
        />
      </div>
      <UserSelect userData={userData} />
    </div>
  );
}

export default CalculatorForm;
