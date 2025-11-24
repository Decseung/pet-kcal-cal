import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import "./SearchInput.css";

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

function SearchInput() {
  const [foodName, setFoodName] = useState("당근");
  const debouncedFoodName = useDebounce(foodName, 500);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!debouncedFoodName) return;

    const SERVICE_KEY = import.meta.env.VITE_FOOD_API_KEY;

    // CORS 우회 프록시 사용 (임시 해결책)
    const apiUrl = `http://api.data.go.kr/openapi/tn_pubr_public_nutri_info_api?serviceKey=${SERVICE_KEY}&_type=json&pageNo=1&numOfRows=100&foodName=${encodeURIComponent(
      debouncedFoodName
    )}`;

    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      apiUrl
    )}`;

    console.log("요청 URL:", proxyUrl); // 디버깅용

    fetch(proxyUrl)
      .then(async (res) => {
        const text = await res.text();
        console.log("응답:", text); // 디버깅용

        try {
          const json = JSON.parse(text);
          setData(json);
          setError(null);
        } catch {
          setData(null);
          setError(text);
        }
      })
      .catch((err) => {
        console.error("에러:", err);
        setError(err.message);
      });
  }, [debouncedFoodName]);

  return (
    <div className="search-input-area">
      <label>
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
      </label>

      <div className="search-result">
        {error && <pre style={{ color: "red" }}>{error}</pre>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {!data && !error && <p>검색 결과가 없습니다.</p>}
      </div>
    </div>
  );
}

export default SearchInput;
