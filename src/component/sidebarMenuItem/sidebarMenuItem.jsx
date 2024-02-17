import React from 'react'
import "./sidebarMenuItem.scss"
import { NavLink } from 'react-router-dom';

export const SidebarMenuItem = ({ route, icon, text }) => {
    return (
        <div className={`sidebar-menu-item`} >
            <NavLink activeClassName="active" className='sidebar-menu-link'
            to={`/${route}`}>
                <div className='sidebar-menu-icon'>{icon}</div>
                <span className='sidebar-menu-text'>{text}</span>
            </NavLink>
        </div>
    )
}