"use client";
import React, { useState, useRef } from "react";
import { motion, whileInView } from "framer-motion";
import { FaEye } from "react-icons/fa";

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
        trigger: "scroll",
      },
    },
  };

  const slideInAnimation = {
    hidden: { y: "-10%", opacity: 0 },
    visible: {
      y: -0.1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const slideOutAnimation = {
    hidden: { x: "5%", opacity: 0 },
    visible: {
      x: 10,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const media = () => {
    if (isHovered && video) {
      return (
        <div className="relative">
          <video
            ref={videoRef}
            src={video}
            className="w-full mb-2 rounded-lg shadow-xl z-10"
            autoPlay
            loop
            muted
          />
          {link && (
            <motion.div
              className="h-10 w-1/4 absolute rounded-tl-2xl rounded-br-lg bottom-2 right-0  bg-black backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-60 items-center justify-center flex"
              variants={isHovered ? slideInAnimation : slideOutAnimation}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaEye
                  className="text-white p-2 rounded-full hover:bg-gray-900 bg-dark backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-60"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              {/* Add more icons or adjust as needed */}
            </motion.div>
          )}
        </div>
      );
    } else {
      return (
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="min-w-full mb-2 rounded-lg shadow-xl z-1 max-h-[200px] object-stretch  "
          />
          {link && (
            <motion.div
              className="h-10 w-1/4 absolute rounded-tl-2xl rounded-br-lg bottom-2 right-0  bg-black backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-60 items-center justify-center flex"
              variants={isHovered ? slideInAnimation : slideOutAnimation}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaEye
                  className="text-white p-2 rounded-full hover:bg-gray-900 bg-dark backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-60"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              {/* Add more icons or adjust as needed */}
            </motion.div>
          )}
        </div>
      );
    }
  };

  // ...

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.25 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dark:bg-primaryDark bg-white flex flex-col items-center rounded-lg shadow-lg h-[355px] w-[320px] mb-4 transition-all duration-300 hover:scale-105">
        {media()}
        <h3 className="text-xl font-bold p-2 dark:text-light">{title}</h3>
        <p className="dark:text-light pb-2 px-2 text-center ">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
