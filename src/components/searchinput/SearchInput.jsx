import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchResult from "../searchresult/SearchResult";
import "./SearchInput.css";

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

function SearchInput() {
  const [foodName, setFoodName] = useState("");
  const debouncedFoodName = useDebounce(foodName, 300);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 콘솔 로그는 상태가 실제로 업데이트 된 후 찍기
  useEffect(() => {
    console.log("Debounced input:", debouncedFoodName);
  }, [debouncedFoodName]);

  useEffect(() => {
    if (!debouncedFoodName) {
      setData(null);
      return;
    }

    const SERVICE_KEY = import.meta.env.VITE_FOOD_API_KEY;

    const url = `http://api.data.go.kr/openapi/tn_pubr_public_nutri_material_info_api?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=1000&type=json&foodLv4Nm=${debouncedFoodName}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [debouncedFoodName]);

  return (
    <div className="search-input-area">
      <div className="search-input-wrap">
        <span>식품 검색</span>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="음식명을 입력하세요"
        />
        <div className="search-btn">
          <Search />
        </div>
      </div>
      <SearchResult data={data} />
    </div>
  );
}

export default SearchInput;
