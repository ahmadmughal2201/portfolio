"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion, whileInView } from 'framer-motion';

const AboutMe = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

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

    const toggleVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' },
    };

    return (
        <section id="about" className=" px-16 md:px-32 lg:px-32 pt-20 pb-20 bg-primaryLight dark:bg-dark">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               variants={containerVariants}
             className="container mx-auto dark:text-light sm:text-start text-center">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                >
                    About Me
                </motion.h2>
                <p
                    className="text-lg mb-4"
 
                >
                    Asalamu Alaikum,
                    <br />
                    A passionate third-year BSCS student with a strong foundation in programming. Recognized for my outstanding academic performance with straight As in the first year, I’vehoned my skills in C++, C#, React, Next.js, Tailwind, Flutter, .NET, and database technologies.
                    <br />
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                key="additionalContent"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={toggleVariants}
                            >
                                What truly drives me is frontend design. I find joy in creating visually captivating and user-friendly interfaces. Fueled by my enthusiasm for design, I leverage tools like Figma to bring my ideas to life.
                                <br />
                                Beyond programming, I delve into ideologies and philosophies, expanding my worldview and fostering critical thinking.
                                <br />
                                Excited to contribute my technical expertise, love for frontend design, and curiosity to deliver innovative projects and impactful solutions.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </p>
                <motion.button
                    onClick={toggleExpanded}
                    className="bg-primaryDark text-light rounded-md px-4 py-2"
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </motion.button>
            </motion.div>
        </section>
    );
};

export default AboutMe;
