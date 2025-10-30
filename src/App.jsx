import { createContext, useContext, useState } from "react";

import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/Main";

export const ThemeContext = createContext();

function App() {
  // 다크모드 판단
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark ? "darkmode" : ""}`}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Header />
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
