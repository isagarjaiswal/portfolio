import React, { createContext, useState } from 'react';
import { Portfolio } from './pages/index';
import "./App.scss";
export const ThemeContext = createContext();

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  console.log({ isLightTheme });

  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <div className={`main-container  ${isLightTheme ? 'light' : 'dark'}`}>
        <Portfolio />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
