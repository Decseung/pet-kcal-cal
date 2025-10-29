import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../../App";

function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header>
      <div className="darkmode-btn">
        <input
          type="checkbox"
          className="sr-only"
          id="darkmode-toggle"
          onChange={handleDarkMode}
        />
        <label htmlFor="darkmode-toggle" className="toggle">
          <span>Toggle dark mode</span>
        </label>
      </div>
    </header>
  );
}

export default Header;
