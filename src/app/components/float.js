"use client";
import React from "react";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, whileInView } from "framer-motion";


const navVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5,
        },
    },
};

const FloatingNavbar = () => {
    return (
        <motion.nav
            className="fixed bottom-5 md:bottom-8 w-[300px] left-[10%] sm:left-[35%] lg:w-1/4 md:w-1/2 h-22  flex justify-around bg-dark backdrop-blur-md backdrop-filter backdrop-opacity-62 bg-opacity-60 p-4 rounded-full shadow-lg z-20"
            variants={navVariants}
            initial="hidden"
            animate="show"
        >
            <Link to="home" smooth={true} spy={true} duration={500}>
                <FaHome
                    className="text-white p-2 rounded-full hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>

            <Link to="projects-section" smooth={true} spy={true} duration={500}>
                <FaProjectDiagram
                    className="text-white p-2 rounded-full hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>

            <Link to="about" smooth={true} spy={true} duration={500}>
                <FaUser
                    className="text-white p-2 rounded-full hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>

            <Link to="contact" smooth={true} spy={true} duration={500}>
                <FaEnvelope
                    className="text-white p-2 rounded-full last:hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>
        </motion.nav>
    );
};

export default FloatingNavbar;
