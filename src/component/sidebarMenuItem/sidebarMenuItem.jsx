import React, { useState } from 'react'
import "./sidebarMenuItem.scss"
import { Link } from 'react-router-dom';

export const SidebarMenuItem = ({ route, icon, text }) => {
    const [pressed, setPressed] = useState(false);
    const handleClick = () => {
        setPressed(true);
        setTimeout(() => {
            setPressed(false);
        }, 100);
    }
    return (
        <div className={`side-page ${pressed ? 'pressed' : ''}`} onClick={handleClick} >
            <Link className='side-page-link' to={`/${route}`}>
                <div className='side-page-icon'>{icon}</div>
                <span className='side-page-text'>{text}</span>
            </Link>
        </div>
    )
}