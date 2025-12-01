import React, { useState } from "react";
import "./DailyAmount.css";
import { useAtom } from "jotai";
import { formAtom } from "../../../atoms/formAtoms";
import useFormHandler from "../../../hooks/handleForm";

function DailyAmout() {
  const [form] = useAtom(formAtom);
  const { handleFormInput } = useFormHandler();
  return (
    <div className="dailyamount">
      <span>하루 급여량</span>
      <div className="dailyamount-input-area">
        <label htmlFor="dailyAmount">
          <input
            type="number"
            id="dailyAmount"
            value={form.dailyAmount}
            onChange={handleFormInput("dailyAmount")}
          />
        </label>
        <span>끼</span>
      </div>
    </div>
  );
}

export default DailyAmout;
