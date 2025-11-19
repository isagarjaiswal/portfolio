import React from 'react';
import './sidebar.scss';
import { PersonalDetails } from '../personalDetails/personalDetails';
import { SidebarMenuLinks } from '../sidebarMenuLinks/sidebarMenuLinks';
import { SocialMediaLinks } from '../socialMediaLinks/socialMediaLinks';
import { Theme } from '../theme/theme';

export const SideBar = () => {
  return (
    <div className="side-bar-container">
      <PersonalDetails />
      <SocialMediaLinks />
      <SidebarMenuLinks />
      <div className="side-line"></div>
      <Theme />
    </div>
  );
};
