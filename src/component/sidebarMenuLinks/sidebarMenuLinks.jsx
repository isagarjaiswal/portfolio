import React from 'react'
import "./sidebarMenuLinks.scss"
import { SidebarMenuItem } from '../index'
import { ContactIcon, HomePageIcon, MaterialIcon, PenIcon, UserAvatar } from '../../icons'


export const SidebarMenuLinks = () => {
    return (
        <div className="side-pages-container">
            <div className='side-page-container'>
                <SidebarMenuItem icon={<HomePageIcon />} text="HomePage" route="" />
                <SidebarMenuItem icon={<MaterialIcon />} text="Projects" route="project" />
                <SidebarMenuItem icon={<UserAvatar />} text="About" route="about" />
                <SidebarMenuItem icon={<PenIcon />} text="Blogs" route="blog" />
                <SidebarMenuItem icon={<ContactIcon />} text="Contact" route="contact" />
            </div>
        </div>
    )
}