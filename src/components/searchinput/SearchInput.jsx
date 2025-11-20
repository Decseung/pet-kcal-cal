import React from "react";
import "./SearchInput.css";
import { Search } from "lucide-react";
function SearchInput() {
  return (
    <div className="search-input-area">
      <label>
        <span>식품 검색</span>
        <input type="text" id="search-input" />
        <div className="search-btn">
          <Search />
        </div>
      </label>
    </div>
  );
}

export default SearchInput;
