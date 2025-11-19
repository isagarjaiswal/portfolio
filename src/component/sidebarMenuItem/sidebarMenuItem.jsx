import React from 'react';
import './sidebarMenuItem.scss';
import { NavLink } from 'react-router-dom';

export const SidebarMenuItem = ({ route, icon, text, handleNav }) => {
  return (
    <div className="sidebar-menu-item" onClick={handleNav}>
      <NavLink
        className="sidebar-menu-link"
        to={`/${route}`}
        activeclassname="active"
      >
        <div className="sidebar-menu-icon">{icon}</div>
        <span className="sidebar-menu-text">{text}</span>
      </NavLink>
    </div>
  );
};
