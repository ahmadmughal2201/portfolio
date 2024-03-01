"use client";
import { Link } from 'react-scroll';
import React from 'react'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <motion.header 
    className='w-full px-16 md:px-26 lg:px-32 md:py-8 py-5 bg-primaryLight font-medium flex items-center justify-between dark:text-light sticky bg-opacity-75 top-0 z-10 dark:bg-opacity-75  dark:bg-dark z-100'
    variants={navVariants}
    initial="hidden"
    animate="show"
    >
       <p className='font-bold  dark:text-light'>Muhammad Ahmad</p>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full min-w-[30px] p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }}>
          {mode === "dark" ?
            <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
          }
        </motion.button>

      </nav>

    </motion.header>
  )
}

export default NavBar 