import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { Routes, Route } from 'react-router-dom';
import { About, Blog, Contact, Homepage, Project } from '../index';
import { SideBar, Navbar, Footer } from "../../component/index"


export const Portfolio = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 875);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="portfolio-container">
            <div className="nav-bar-box">
                {isMobileView ? <Navbar /> : <SideBar />}
            </div>
            <div className="main-content-box">

                <Routes>
                    <Route exact path='/' element={<Homepage />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/blog' element={<Blog />} />
                    <Route exact path='/project' element={<Project />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

