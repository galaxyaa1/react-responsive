import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="left-section">
                <h4>Frontend Developer</h4>
            </div>
            <div className="center-section">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <div className="right-section">
                <p>All rights reserved © 2024</p>
            </div>
        </footer>
    );
};

export default Footer;