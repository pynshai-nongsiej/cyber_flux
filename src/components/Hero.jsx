import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="hero-section">
            <div className="hero-background"></div>

            <motion.div
                className="hero-content"
                style={{ y, opacity }}
            >
                <motion.div
                    className="hero-brand"
                    initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <img
                        src="/assets/hero.png"
                        alt="CYBER FLUX"
                        className="hero-image"
                    />
                </motion.div>

                <motion.div
                    className="hero-cta"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <p className="hero-tagline">DIGITAL FASHION // PHYSICAL REALITY</p>
                    <button className="cta-button">
                        ENTER THE FLUX
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown color="var(--color-neon-green)" />
            </motion.div>
        </section>
    );
};

export default Hero;
