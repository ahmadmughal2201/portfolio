"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";

const projects = [
  {
    image: "/images/projects/classroom.png",
    video: "/images/projects/classroom.mp4",
    title: "Classrooms",
    link: "https://github.com/ahmadmughal2201/Classroom-Complete",
    description:
      "Classrooms connects students and educators. Manage classes, assignments, and assessments. Built using Flutter and backed by a Node.js and MongoDB stack",
    tags: ["Mobile"],
  },

  {
    image: "/images/projects/workway.jpg",
    video: "/images/projects/workway.mp4",
    title: "Workway",
    link: "https://github.com/SyedMuhammadFraz/Employment-Portal-System",
    description:
      "Elevate your career  with personalized resume editing, hiring and dynamic job listings. Powered by Next.js, Node.js and MongoDB .",
    tags: ["Web"],
  },
  {
    image: "/images/projects/postImage.jpg",
    video: "/images/projects/app.mp4",
    title: "PostFix",
    description:
      "A Flutter-based mobile application that provides a platform for users to connect, share, and interact with each other",
    tags: ["Mobile"],
  },
  {
    image: "/images/projects/space.png",
    title: "Galaxy Shooter",
    video: "",
    description:
      "A 2.5D game crafted with Unity. Navigate through of space and face the enemy.",
    link: "https://ahmadmughal.itch.io/space-shooter",

    tags: ["Game"],
  },
  {
    image: "/images/projects/flappy.png",
    title: "Galaxy Shooter",
    video: "",
    description: "The classic flappy bird, made in Unity",
    link: "https://ahmadmughal.itch.io/flappy-bird",

    tags: ["Game"],
  },
  {
    image: "/images/projects/meta.png",
    video: "",
    link: "https://metaverse-nine-sand.vercel.app/",
    title: "Metaversus",
    description:
      "A platform to explore diverse virtual worlds and dive into the realm of the metaverse. Translated Figma designs into an immersive React project",
    tags: ["Web"],
  },

  {
    image: "/images/projects/zombie.jpg",
    title: "Last Day",
    video: "/images/projects/zombie.mp4",
    description:
      "A thrilling game developed in C# with a custom framework, where players aim to defeat zombies and survive.",
    tags: ["Game"],
  },
  {
    image: "/images/projects/gui.jpg",
    video: "/images/projects/gui.mp4",
    title: "Train Station Management",
    description:
      "A  Windows form application that empowers efficient management of trains, stations, and bookings, ensuring a streamlined experience for railway operations and passengers alike.",
    tags: ["Desktop"],
  },
  {
    image: "/images/projects/farmer.png",
    video: "",
    title: "Farmers Representative",
    description:
      "An intuitive app designed to assist farmers in selling their crops. Users can also purchase crops directly from the platform",
    tags: ["Desktop"],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

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

  const tabs = ["Desktop", "Mobile", "All", "Web", "Game"];

  return (
    <div
      id="projects-section"
      className="bg-primaryLight dark:bg-dark w-full pt-20 pb-20 sm:text-start text-center"
    >
      <motion.div
        initial="hidden"
        whileInView={{ ...containerVariants, threshold: 0.1 }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-16 md:px-32  pt-10 pb-5"
      >
        <h2 className="text-3xl font-bold  pb-8 dark:text-light">Projects</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? "bg-primaryDark text-white dark:bg-white dark:text-primaryDark selected"
                  : "bg-white text-primaryDark dark:bg-dark dark:text-primaryLight"
              } focus:outline-none focus:ring focus:border-blue-300`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                image={project.image}
                title={project.title}
                video={project.video}
                link={project.link}
                description={project.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
