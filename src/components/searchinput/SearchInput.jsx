import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import SearchResult from "../searchresult/SearchResult";
import "./SearchInput.css";

function SearchInput({
  foodName,
  setFoodName,
  data,
  userData,
  openResult,
  setOpenResult,
  setUserData,
}) {
  const inputRef = useRef();

  // 콘솔 로그는 상태가 실제로 업데이트 된 후 찍기

  const handleResultFocus = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const firstCard = document.querySelector(
        ".search-result-area .food-card"
      );
      if (firstCard) firstCard.focus();
    }
  };

  return (
    <div className="search-input-area">
      <div className="search-input-wrap">
        <span>식품 검색</span>
        <input
          ref={inputRef}
          type="text"
          value={foodName}
          onChange={(e) => {
            setFoodName(e.target.value);
            setOpenResult(true);
          }}
          placeholder="음식명을 입력하세요"
          onKeyDown={handleResultFocus}
        />
        <div className="search-btn">
          <Search />
        </div>
      </div>
      <SearchResult
        data={data}
        inputRef={inputRef}
        setUserData={setUserData}
        userData={userData}
        setFoodName={setFoodName}
        openResult={openResult}
        setOpenResult={setOpenResult}
      />
    </div>
  );
}

export default SearchInput;
