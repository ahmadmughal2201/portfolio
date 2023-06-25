"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
            },
        },
    };

    return (
        <section id="about" className="px-32 pt-20 pb-20 bg-primaryLight  dark:bg-dark">
            <div className="container mx-auto dark:text-light">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-lg mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    Asalamu Alaikum,
                    <br />
                    A passionate third-year BSCS student with a strong foundation in programming. Recognized for my outstanding academic performance with straight As in the first year, Ive honed my skills in C++, C#, React, Next.js, Tailwind, Flutter, .NET, and database technologies.
                    <br />
                    What truly drives me is frontend design. I find joy in creating visually captivating and user-friendly interfaces. Fueled by my enthusiasm for design, I leverage tools like Figma to bring my ideas to life.
                    <br />
                    Beyond programming, I delve into ideologies and philosophies, expanding my worldview and fostering critical thinking.
                    <br />
                    Im excited to contribute my technical expertise, love for frontend design, and curiosity to deliver innovative projects and impactful solutions.
                </motion.p>
            </div>
        </section>
    );
};

export default AboutMe;

