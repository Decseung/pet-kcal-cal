import React, { useState } from "react";
import "./FoodType.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function FoodType() {
  const [form] = useAtom(formAtom);

  const { handleFormInput } = useFormHandler();

  return (
    <div className="food-type">
      <span>급여 종류</span>
      <div className="food-type-input-area">
        <div
          className={`foodtype-background-toggle ${
            form.foodType === "dry"
              ? "dry"
              : form.foodType === "mix"
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
            checked={form.foodType === "wet"}
            onChange={handleFormInput("foodType")}
          />
        </label>
        <label htmlFor="dry">
          건식
          <input
            type="radio"
            id="dry"
            value="dry"
            name="foodType"
            checked={form.foodType === "dry"}
            onChange={handleFormInput("foodType")}
          />
        </label>
        <label htmlFor="mix">
          혼합
          <input
            type="radio"
            id="mix"
            value="mix"
            name="foodType"
            checked={form.foodType === "mix"}
            onChange={handleFormInput("foodType")}
          />
        </label>
      </div>
    </div>
  );
}

export default FoodType;
