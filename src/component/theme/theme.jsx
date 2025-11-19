import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './theme.scss';
import { DarkMode, LightMode } from '../../icons';

export const Theme = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="side-mode-container">
      <div className="side-mode">
        {isLightTheme ? <DarkMode /> : <LightMode />}
      </div>
    </div>
  );
};
