import React from "react";
import "./footer.scss";
import { DigitalWatch } from "../digitalWatch/digitalWatch";

export const Footer = () => {
    return (
        <footer className='footer-portfolio'>
            <div className="footer-line"></div>
            <div className="footer-content">
                <div className="footer-author">Made by <span className='author'>Sagar Jaiswal</span></div>
                <div className="footer-year">&copy; 2024 portfolio</div>
                <DigitalWatch />
            </div>
        </footer>
    );
}