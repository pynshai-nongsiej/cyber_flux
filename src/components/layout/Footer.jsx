import React from 'react';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>CYBER_FLUX</h2>
                    <p>DIGITAL FASHION FOR THE METAVERSE GENERATION.</p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>SHOP</h3>
                        <a href="#">LATEST DROPS</a>
                        <a href="#">ACCESSORIES</a>
                        <a href="#">DIGITAL ASSETS</a>
                    </div>
                    <div className="link-group">
                        <h3>SUPPORT</h3>
                        <a href="#">SHIPPING</a>
                        <a href="#">RETURNS</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>

                <div className="footer-social">
                    <a href="#" aria-label="Instagram"><Instagram /></a>
                    <a href="#" aria-label="Twitter"><Twitter /></a>
                    <a href="#" aria-label="TikTok"><MessageCircle /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 CYBER_FLUX. ALL RIGHTS RESERVED.</p>
                <p>SYSTEM_STATUS: ONLINE</p>
            </div>
        </footer>
    );
};

export default Footer;
