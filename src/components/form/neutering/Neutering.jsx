import React, { useState } from "react";
import "./Neutering.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function Neutering() {
  const [form] = useAtom(formAtom);

  const { handleFormInput } = useFormHandler();

  return (
    <div className="neutering">
      <span>중성화 여부</span>
      <div className="neutering-input-area">
        <div
          className={`neutering-background-toggle ${
            form.neutering === true ? "true" : "false"
          }`}
        ></div>
        <label htmlFor="neutering">
          O
          <input
            type="radio"
            id="neutering"
            value={true}
            name="neutering"
            checked={form.neutering === true}
            onChange={handleFormInput("neutering")}
          />
        </label>
        <label htmlFor="not-neutering">
          X
          <input
            type="radio"
            id="not-neutering"
            value={false}
            name="neutering"
            checked={form.neutering === false}
            onChange={handleFormInput("neutering")}
          />
        </label>
      </div>
    </div>
  );
}

export default Neutering;
