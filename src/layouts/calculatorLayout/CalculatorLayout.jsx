import React from "react";
import "./CalculatorLayOut.css";
import { PawPrint } from "lucide-react";
import CalculatorResult from "../../components/result/CalculatorResult";
import CalculatorForm from "../../components/form/CalculatorForm";

function CalculatorLayout() {
  return (
    <div className="container">
      {/* Left Side: Form */}
      <div className="left-form">
        <div className="form-header">
          <h1>
            Pet Food Calculator
            <PawPrint className="foot-print" size={24} />
          </h1>

          <p>반려동물의 정보를 입력해주세요</p>
        </div>
        <CalculatorForm />
      </div>

      {/* Right Side: Results */}
      <div className="right-form">
        <CalculatorResult />
      </div>
    </div>
  );
}

export default CalculatorLayout;
