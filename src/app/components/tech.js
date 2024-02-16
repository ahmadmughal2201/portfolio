"use client"
import React from 'react';
import { motion } from 'framer-motion';
const Technologies = () => {
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
        
        <section id="technologies" className="px-16 md:px-32 lg:px-32 py-20 dark:bg-primaryDark">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.25 }}

            className="container mx-auto dark:text-light sm:text-start text-center">
                <h2 className="text-3xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap justify-center items-center">

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/cSharp.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/next.svg'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/unity.svg'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/js.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/html.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/react.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/tailwind.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/figma.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/netFrame.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};
export default Technologies;

