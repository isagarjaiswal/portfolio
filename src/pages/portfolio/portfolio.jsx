import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { Routes, Route } from "react-router-dom";
import { About, Blog, Contact, Homepage, Project } from "../index";
import { SideBar, Navbar, Footer, NotFound } from "../../component/index";

export const Portfolio = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        gtagEvent({
            action: "portfolio_view",
            category: "page_load",
            label: "Portfolio Root",
          });
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 875);
        };
        gtagEvent({
            action: "layout_switch",
            category: "device",
            label: isMobile ? "Mobile view" : "Desktop View",
          });
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="portfolio-container">
            <div className="nav-bar-box">
                {isMobileView ? <Navbar /> : <SideBar />}
            </div>
            <div className="main-content-box">
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};
