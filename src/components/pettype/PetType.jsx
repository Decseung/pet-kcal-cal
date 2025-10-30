import React, { useContext } from "react";
import "./PetType.css";
import { BasicInfoContext } from "../main/Main";

function PetType() {
  const { basicInfo, setBasicInfo } = useContext(BasicInfoContext);

  const handlePetType = (e) => {
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pet-type">
      <span>반려동물</span>
      <div className="pet-type-input-area">
        <div
          className={`background-toggle ${
            basicInfo.petType === "cat" ? "cat" : ""
          }`}
        ></div>
        <label htmlFor="dog">
          강아지
          <input
            type="radio"
            id="dog"
            value="dog"
            name="petType"
            checked={basicInfo.petType === "dog"}
            onChange={handlePetType}
          />
        </label>
        <label htmlFor="cat">
          고양이
          <input
            type="radio"
            id="cat"
            value="cat"
            name="petType"
            checked={basicInfo.petType === "cat"}
            onChange={handlePetType}
          />
        </label>
      </div>
    </div>
  );
}

export default PetType;
