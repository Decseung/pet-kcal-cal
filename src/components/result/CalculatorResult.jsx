import React from "react";
import "./CalculatorResult.css";
import { Flame, Activity, Utensils } from "lucide-react";

function CalculatorResult() {
  return (
    <div className="wrap">
      <div>
        <h2 className="title">계산 결과</h2>

        <div className="card-list">
          <div className="card card-white">
            <div className="icon icon-purple">
              <Activity />
            </div>
            <div>
              <p className="label">기초 대사량 (RER)</p>
              <p className="value">
                {/* {weight > 0 ? Math.round(rer) : 0} */}0
                <span className="unit">kcal</span>
              </p>
            </div>
          </div>

          <div className="card card-der">
            <div className="icon icon-der">
              <Flame />
            </div>
            <div>
              <p className="label-der">일일 권장 칼로리 (DER)</p>
              <p className="value-der">
                {/* {weight > 0 ? der : 0} */}0
                <span className="unit-der">kcal</span>
              </p>
            </div>
          </div>

          <div className="card card-white">
            <div className="icon icon-purple">
              <Utensils />
            </div>
            <div>
              <p className="label">한 끼 권장 급여량</p>
              <p className="value">
                {/* {weight > 0 ? perMeal : 0} */}0
                <span className="unit">kcal</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="summary">
        <p>
          <strong>강아지</strong>의 체중
          <strong>0kg</strong>을 기준으로 계산된 결과입니다. 활동량과 중성화
          여부에 따라 실제 필요량은 달라질 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default CalculatorResult;
