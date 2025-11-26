import React from "react";
import "./SearchResult.css";

function SearchResult({ data }) {
  console.log(data);
  return (
    <div className={`search-result-area ${data ? "open" : ""}`}>
      {data?.response?.body?.items.map((item) => {
        const filterFoodName = item.foodNm.replaceAll("_", " ");
        return (
          <div className="food-card" key={item.foodCd}>
            <div className="food-name">{filterFoodName}</div>
          </div>
        );
      })}
      <div className="direct-insert food-card">직접 입력 하기</div>
    </div>
  );
}

export default SearchResult;
