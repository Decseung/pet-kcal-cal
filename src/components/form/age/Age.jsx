import React, { useState } from "react";
import "./Age.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function Age() {
  const [form] = useAtom(formAtom);

  const { handleFormInput } = useFormHandler();

  return (
    <div className="age">
      <span>나이</span>
      <div className="age-input-area">
        <label htmlFor="age">
          <input
            type="number"
            id="age"
            value={form.age}
            onChange={handleFormInput("age")}
          />
          <span>세</span>
        </label>
      </div>
    </div>
  );
}

export default Age;
