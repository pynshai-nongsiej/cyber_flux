import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="glitch" data-text="CYBER_FLUX">CYBER_FLUX</span>
            </div>

            <div className="navbar-desktop">
                <a href="#lookbook" className="nav-link">LOOKBOOK</a>
                <a href="#drops" className="nav-link">DROPS</a>
                <a href="#about" className="nav-link">ABOUT</a>
            </div>

            <div className="navbar-actions">
                <button className="cart-btn">
                    <ShoppingBag size={20} />
                    <span className="cart-count">0</span>
                </button>
                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <a href="#lookbook" onClick={() => setIsOpen(false)}>LOOKBOOK</a>
                        <a href="#drops" onClick={() => setIsOpen(false)}>DROPS</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
