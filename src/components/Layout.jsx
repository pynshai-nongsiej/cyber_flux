import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Marquee from './ui/Marquee';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="layout-content">
                <div className="marquee-wrapper">
                    <Marquee text="NEW DROP INCOMING /// LIMITED EDITION /// CYBER_FLUX S/S 2026 /// FREE SHIPPING WORLDWIDE /// " speed={30} />
                </div>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
