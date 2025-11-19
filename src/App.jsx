import React, { createContext, useState } from 'react';
import { Portfolio } from './pages/index';
import GAListener from './components/GA/GAListener';
import "./App.scss";
export const ThemeContext = createContext();

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);


  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <div className={`main-container  ${isLightTheme ? 'light' : 'dark'}`}>
        <Portfolio />
        <GAListener />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
