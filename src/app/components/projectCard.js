"use client"
import React, { useState, useRef } from 'react';
import { motion, whileInView } from 'framer-motion';
import { FaEye } from 'react-icons/fa';


const ProjectCard = ({ image, video, title, description, index, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };



    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.4,
                trigger: 'scroll',
            },
        },
    };

    const media = () => {
        if (isHovered && video) {
            return (
                <video
                    ref={videoRef}
                    src={video}
                    className="w-full mb-2 rounded-lg shadow-xl z-10"
                    autoPlay
                    loop
                    muted
                />
            );
        } else {
            return (
                <div className="relative">
                    <img src={image} alt={title} className="min-w-full mb-2 rounded-lg shadow-xl z-10 max-h-[180px] object-stretch "
                    />
                    {isHovered && link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <FaEye
                                className="text-white p-2 rounded-full hover:bg-gray-900 bg-dark backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-60"
                                style={{ width: "40px", height: "40px" }}
                            />
                        </a>
                    )}
                </div>
            );
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.25 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="dark:bg-primaryDark bg-white flex flex-col items-center rounded-lg shadow-lg h-[375px] w-[320px] mb-4 transition-all duration-300 hover:scale-105">
                {media()}
                <h3 className="text-xl font-bold p-2 dark:text-light">{title}</h3>
                <p className="dark:text-light pb-3 px-2 text-justify ">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
