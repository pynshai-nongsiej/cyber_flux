import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './Lookbook.css';

const items = [
    { id: 1, title: 'ZERO-G RUNNER', img: '/assets/sneakers.png', hue: 0 },
    { id: 2, title: 'VOID WALKER', img: '/assets/sneakers.png', hue: 90 },
    { id: 3, title: 'NEON STRIDER', img: '/assets/sneakers.png', hue: 180 },
    { id: 4, title: 'CHROME PHANTOM', img: '/assets/sneakers.png', hue: 270 },
    { id: 5, title: 'CYBER CORE', img: '/assets/sneakers.png', hue: 45 },
];

const Lookbook = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="lookbook-section" id="lookbook">
            <div className="lookbook-header">
                <h2>S/S 2026 // LOOKBOOK</h2>
                <p>DRAG TO EXPLORE /// SYSTEM_READY</p>
            </div>

            <div className="lookbook-container">
                <motion.div style={{ x }} className="lookbook-track">
                    {items.map((item) => (
                        <div key={item.id} className="lookbook-card">
                            <div className="card-image-wrapper">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ filter: `hue-rotate(${item.hue}deg)` }}
                                />
                            </div>
                            <div className="card-info">
                                <h3>{item.title}</h3>
                                <span className="card-price">??? ETH</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Lookbook;
