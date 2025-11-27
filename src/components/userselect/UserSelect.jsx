import React, { useState } from "react";
import "./UserSelect.css";
import RangeBar from "../ui/rangebar/RangeBar";

function UserSelect({ userData }) {
  const [rangeValue, setRangeValue] = useState(userData.map(() => 0));

  const handleChange = (index, newValue) => {
    const newValues = [...rangeValue];
    newValues[index] = newValue;
    setRangeValue(newValues);
  };

  return (
    <div className="user-select-area">
      {userData &&
        userData.map((item, idx) => {
          const filterFoodName = item.foodLv4Nm;
          return (
            <div className="user-select-food-info" key={item.foodCd}>
              <div className="user-select-food-info-data">
                <div className="user-select-food-name">
                  {filterFoodName}
                  <span className="user-select-food-detail-name">
                    ({item.foodLv7Nm})
                  </span>
                </div>
                <div className="user-select-kcal-area">
                  <span>1g / kcal</span>
                  <div className="user-select-kcal-info">
                    {item.enerc / 100}
                  </div>
                </div>
              </div>
              <RangeBar
                value={rangeValue[idx]}
                onChange={(val) => handleChange(idx, val)}
              />
            </div>
          );
        })}
    </div>
  );
}

export default UserSelect;
