import React, { createContext, useState } from 'react'
import { Portfolio } from './pages/index'
import "./App.scss";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);
  
  const toggleTheme = () => {
    setTheme(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`main-container ${theme ? 'light' : ''}`}>
        <Portfolio />
      </div>
    </ThemeContext.Provider >
  )
}

export default App