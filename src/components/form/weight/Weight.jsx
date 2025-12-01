import React, { useState } from "react";
import "./Weight.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function Weight() {
  const [form] = useAtom(formAtom);

  const { handleFormInput } = useFormHandler();
  return (
    <div className="weight">
      <span>체중</span>
      <div className="weight-input-area">
        <label htmlFor="weight">
          <input
            type="number"
            id="weight"
            value={Number(form.weight)}
            onChange={handleFormInput("weight")}
          />
          <span>Kg</span>
        </label>
      </div>
    </div>
  );
}

export default Weight;
