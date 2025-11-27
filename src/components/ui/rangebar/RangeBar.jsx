import React from "react";
import "./RangeBar.css";

function RangeBar({ value, onChange }) {
  const min = 0;
  const max = 100;
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="ratio">
      <span>{value || 0}%</span>
      <input
        type="range"
        min={0}
        max={100}
        value={value || 0}
        step={1}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #6d28d9 ${percent}%, #fff ${percent}%)`,
        }}
      />
    </div>
  );
}

export default RangeBar;
