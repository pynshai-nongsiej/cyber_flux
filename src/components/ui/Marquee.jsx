import React from 'react';
import './Marquee.css';

const Marquee = ({ text, direction = 'left', speed = 20 }) => {
    return (
        <div className="marquee-container">
            <div
                className={`marquee-content ${direction}`}
                style={{ animationDuration: `${speed}s` }}
            >
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
            <div
                className={`marquee-content ${direction}`}
                style={{ animationDuration: `${speed}s` }}
                aria-hidden="true"
            >
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Marquee;
