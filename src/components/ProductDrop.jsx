import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import './ProductDrop.css';

const ProductDrop = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 2,
        minutes: 45,
        seconds: 12
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="drop-section" id="drops">
            <div className="drop-container">
                <div className="drop-info">
                    <div className="stock-indicator">
                        <span className="blinking-dot"></span>
                        SELLING FAST
                    </div>
                    <h2>NEXT DROP: <br />CYBER_STORM_V2</h2>
                    <p className="drop-desc">
                        LIMITED EDITION. CHROMIUM PLATED. NEURAL LINK COMPATIBLE.
                        ONLY 500 UNITS AVAILABLE GLOBALLY.
                    </p>

                    <div className="countdown">
                        <div className="time-block">
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                            <label>HRS</label>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-block">
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <label>MIN</label>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-block">
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <label>SEC</label>
                        </div>
                    </div>

                    <form className="notify-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="ENTER_EMAIL // GET_NOTIFIED" />
                        <button type="submit">JOIN_WAITLIST</button>
                    </form>

                    <div className="warning-box">
                        <AlertCircle size={20} color="var(--color-neon-pink)" />
                        <span>WARNING: HIGH TRAFFIC EXPECTED</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDrop;
