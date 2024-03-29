"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFileDownload } from 'react-icons/fa';
import { TypingText } from './CustomTexts';


const Design = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    const circleVariant = {
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
    };

    const textVariant = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div id='home' className=' dark:bg-primaryDark h-full md:mt-0 -mt-6'>
            <div className='flex lg:flex-row flex-col pt-0 md:pt-10 relative '>

                <motion.div
                    variants={textVariant}
                    initial='hidden'
                    whileInView='show'
                    className='flex-1 px-16 md:px-32 lg:px-32 pt-8 pb-28'>
                    <p
                        className='text-l dark:text-light'
                    >
                        Asalamu Alaikum, I am
                    </p>

                    <h1
                        className='text-4xl font-bold mb-4 dark:text-light'
                    >
                        Muhammad Ahmad
                    </h1>



                    <TypingText title={' Full Stack Developer'} textStyles={'text-xl dark:text-light'} />

                    <button
                        onClick={handleDownload}
                        className="flex items-center px-4 py-2 mt-4 bg-primaryDark dark:bg-light p-1 text-light dark:text-dark rounded-md hover:scale-110"
                    >
                        <FaFileDownload className="mr-1" />

                        Resume
                    </button>

                </motion.div>
                <div className='flex justify-center md:mt-0 -mt-6'>
                    <motion.div
                        className='w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full absolute bottom-[20px]'
                        style={{
                            backgroundImage: `url('/images/profile/circle.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        variants={circleVariant}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.25 }}
                    />
                    <div className='relative ' >
                        <img src="/images/profile/me.png" alt="Profile Picture" className='
                    md:h-[500px] md:w-[610px]sm:w-full sm:h-auto sm:max-h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Design;