"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './projectCard';

const projects = [
    {
        image: '/images/projects/gui.mp4',
        title: 'Train Station Management',
        description: 'A Windows form application developed in C# for efficient management of trains and bookings',
    },
    {
        image: '/images/projects/app.mp4',
        title: 'PostFix',
        description: 'A Flutter-based mobile application that provides a platform for users to connect, share, and interact with each other',
    },
    {
        image: '/images/projects/zombie.mp4',
        title: 'Last Day',
        description: 'A thrilling game developed in C# with a custom framework, where players aim to defeat zombies and survive.',
    },
    {
        image: '/images/projects/farmer.png',
        title: 'Farmers Representative',
        description: ' An intuitive app designed to assist farmers in selling their crops. Users can also purchase crops directly from the platform',
    },
    // Add more projects as needed
];

const Projects = () => {


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
        <div
            id="projects-section"
            className='bg-primaryLight dark:bg-dark w-full pt-20 pb-20 sm:text-start text-center'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className="px-16 md:px-32  pt-10 pb-5">
                <h2
                    className="text-3xl font-bold  pb-8 dark:text-light">
                    Projects
                </h2>

                <div
                    className="flex flex-wrap justify-center gap-3"

                >
                    {projects.map((project, index) => (
                        <div
                            key={index}

                        >
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;
