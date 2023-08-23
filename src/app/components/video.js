"use client"
import React from 'react';
import { motion } from 'framer-motion';

const YouTubeVideo = () => {

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
        <section className='bg-primaryLight  dark:bg-dark'>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.25 }}

            className="video-container px-32 py-20 bg-primaryLight  dark:bg-dark sm:text-start text-center">
            <h2
                className="text-3xl font-bold mb-4  dark:text-light">Highlights</h2>
            <div
                className="flex flex-col justify-center items-center">
                <iframe
                    width='340'
                    height='340'
                    src="https://www.youtube.com/embed/qdbPJPxcKqE?start=105"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </motion.div>
        </section>
    );
};

export default YouTubeVideo;
