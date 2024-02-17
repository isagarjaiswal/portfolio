import React, { useContext } from 'react'
import { ThemeContext } from '../../App';
import "./theme.scss"
import { DarkMode, LightMode } from '../../icons';

export const Theme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div onClick={toggleTheme} className='side-mode-container' >
            
            <div className='side-mode'>
                {theme ? (<LightMode />) : (<DarkMode />)}
            </div>
        </div >
    );
}

