import React, { useState } from 'react';
import './navbar.scss';
import {
  PersonalDetails,
  SidebarMenuLinks,
  SocialMediaLinks,
  Theme,
} from '../index';
import { MenuIcon, CrossIcon } from '../../icons/index';

export const Navbar = () => {
  const [isExpand, setIsExpand] = useState(true);
  const handleNav = () => {
    setTimeout(() => {
      setIsExpand(!isExpand);
    }, 200);
  };

  return (
    <div className={`nav-bar`}>
      <div className="nav-bar-upper-body">
        <PersonalDetails />
        <div className="nav-bar-openner">
          <div className="openner" onClick={handleNav}>
            {isExpand ? <MenuIcon /> : <CrossIcon />}
          </div>
          <Theme />
        </div>
      </div>
      <div className="nav-bar-line"></div>
      {isExpand && (
        <div className="nav-bar-lower-body">
          <SidebarMenuLinks handleNav={handleNav} />
          <div className="nav-bar-line"></div>
          <SocialMediaLinks />
        </div>
      )}
    </div>
  );
};
