import React from "react";
import "./SearchResult.css";
import { MoveRight } from "lucide-react";

function SearchResult({ data }) {
  console.log(data);
  return (
    <div className={`search-result-area ${data ? "open" : ""}`}>
      {data?.response?.body?.items.map((item) => {
        const filterFoodName = item.foodNm.replaceAll("_", " ");
        return (
          <div className="food-card" key={item.foodCd}>
            <div className="food-name">{filterFoodName}</div>
            <div className="kcal-area">
              <span>1g / kcal</span>
              <div className="kcal-info">{item.enerc / 100}</div>
            </div>
            <div className="enter-arrow">
              <MoveRight size={18} />
            </div>
          </div>
        );
      })}
      <div className="direct-insert food-card">직접 입력 하기</div>
    </div>
  );
}

export default SearchResult;
