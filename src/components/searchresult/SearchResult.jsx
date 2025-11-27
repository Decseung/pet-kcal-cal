import React, { useRef } from "react";
import "./SearchResult.css";
import { MoveRight } from "lucide-react";
import * as RovingFocusGroup from "@radix-ui/react-roving-focus";

function SearchResult({ data, inputRef }) {
  const rovingRef = useRef(null);

  const handleInputFocus = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      // 검색 결과가 없거나, 이 카드가 첫 번째 카드인 경우 input으로 포커스
      const foodCards = document.querySelectorAll(
        ".search-result-area .food-card"
      );
      if (foodCards.length === 1 || e.currentTarget === foodCards[0]) {
        inputRef.current?.focus();
      } else {
        // 일반적으로 이전 카드로 이동
        const prevCard = e.currentTarget.previousElementSibling;
        prevCard?.focus();
      }
    }
  };

  return (
    <RovingFocusGroup.Root orientation="vertical" ref={rovingRef}>
      <div className={`search-result-area ${data ? "open" : ""}`}>
        {data?.response?.body?.items.map((item, index) => {
          const filterFoodName = item.foodNm.replaceAll("_", " ");
          return (
            <RovingFocusGroup.Item key={item.foodCd} asChild>
              <div
                className="food-card"
                tabIndex={0}
                onKeyDown={handleInputFocus}
              >
                <div className="food-name">{filterFoodName}</div>
                <div className="kcal-area">
                  <span>1g / kcal</span>
                  <div className="kcal-info">{item.enerc / 100}</div>
                </div>
                <div className="enter-arrow">
                  <MoveRight size={18} />
                </div>
              </div>
            </RovingFocusGroup.Item>
          );
        })}

        <RovingFocusGroup.Item asChild key="direct">
          <div
            className="direct-insert food-card"
            tabIndex={0}
            onKeyDown={handleInputFocus}
          >
            직접 입력 하기
          </div>
        </RovingFocusGroup.Item>
      </div>
    </RovingFocusGroup.Root>
  );
}

export default SearchResult;
