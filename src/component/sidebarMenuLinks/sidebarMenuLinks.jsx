import React from 'react';
import './sidebarMenuLinks.scss';
import { SidebarMenuItem } from '../index';
import {
  ContactIcon,
  HomePageIcon,
  MaterialIcon,
  PenIcon,
  UserAvatar,
} from '../../icons';

export const SidebarMenuLinks = ({ handleNav }) => {
  return (
    <div className="side-pages-container">
      <div className="side-page-container">
        <SidebarMenuItem
          handleNav={handleNav}
          icon={<HomePageIcon />}
          text="HomePage"
          route=""
        />
        <SidebarMenuItem
          handleNav={handleNav}
          icon={<MaterialIcon />}
          text="Projects"
          route="project"
        />
        <SidebarMenuItem
          handleNav={handleNav}
          icon={<UserAvatar />}
          text="About"
          route="about"
        />
        <SidebarMenuItem
          handleNav={handleNav}
          icon={<PenIcon />}
          text="Blogs"
          route="blog"
        />
        <SidebarMenuItem
          handleNav={handleNav}
          icon={<ContactIcon />}
          text="Contact"
          route="contact"
        />
      </div>
    </div>
  );
};
