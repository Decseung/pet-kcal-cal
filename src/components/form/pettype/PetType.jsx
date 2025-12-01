import React, { useState } from "react";
import "./PetType.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function PetType() {
  const [form] = useAtom(formAtom);

  const { handleFormInput } = useFormHandler();
  return (
    <div className="pet-type">
      <span>반려동물</span>
      <div className="pet-type-input-area">
        <div
          className={`pettype-background-toggle ${
            form.petType === "cat" ? "cat" : ""
          }`}
        ></div>
        <label htmlFor="cat">
          고양이
          <input
            type="radio"
            id="cat"
            value="cat"
            name="petType"
            checked={form.petType === "cat"}
            onChange={handleFormInput("petType")}
          />
        </label>
        <label htmlFor="dog">
          강아지
          <input
            type="radio"
            id="dog"
            value="dog"
            name="petType"
            checked={form.petType === "dog"}
            onChange={handleFormInput("petType")}
          />
        </label>
      </div>
    </div>
  );
}

export default PetType;
