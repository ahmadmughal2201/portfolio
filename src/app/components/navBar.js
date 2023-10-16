"use client";
import { Link } from 'react-scroll';
import React from 'react'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher';


const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-16 md:px-26 lg:px-32 md:py-8 py-5 bg-primaryLight font-medium flex items-center justify-between dark:text-light sticky bg-opacity-75 top-0 z-10 dark:bg-opacity-75  dark:bg-dark z-100'>
       <p className='font-bold  dark:text-light'>Muhammad Ahmad</p>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full min-w-[30px] p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }}>
          {mode === "dark" ?
            <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
          }
        </motion.button>

      </nav>

    </header>
  )
}

export default NavBar 