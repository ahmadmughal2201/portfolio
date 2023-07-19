"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {


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
        <section
         id="contact"
          className="px-16 md:px-32 lg:px-32  py-20 dark:bg-primaryDark sm:text-start text-center">
            <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
            className="container mx-auto dark:text-light">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="mb-4 shadow-lg z-10">
                            <label className="block  text-sm font-medium mb-1"></label>
                            <input
                                type="text"
                                className=" w-full px-4 py-2 border border-none rounded focus:outline-none focus:border-indigo-500 dark:bg-primaryDark"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4 shadow-lg z-10">
                            <label className="block text-sm font-medium mb-1"></label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 dark:bg-primaryDark border-none rounded focus:outline-none focus:border-indigo-500"
                                placeholder="Your email address"
                            />
                        </div>
                        <div className="mb-4 shadow-lg z-10">
                            <label className="block text-sm font-medium mb-1"></label>
                            <textarea
                                className="w-full px-4 py-2 border dark:bg-primaryDark border-none rounded focus:outline-none focus:border-indigo-500"
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button className=" dark:bg-dark bg-primaryLight  dark:text-white font-bold px-4 py-2 rounded hover:bg-gray-500">Send Message</button>
                    </div>


                    <div className="w-full md:w-1/2 pl-0 md:pl-20">
                        <div className="mb-4 items-center justify-center flex flex-col">
                            <a href="https://api.whatsapp.com/send?phone=923092990499" target="_blank" rel="noopener noreferrer" className="flex  items-center">
                                <div className=" bg-primaryLight  dark:bg-dark shadow p-10 mb-4 flex flex-col justify-center items-center rounded-xl">


                                    <p className='dark:text-white font-bold'>WhatsApp</p>
                                    <p className='dark:text-white font-bold'>+923092990499</p>
                                    <p className='dark:text-white mt-4 '>Send a Message</p>



                                </div>
                            </a>
                            <a href="mailto:ahmadmughal2201@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div className="bg-primaryLight  dark:bg-dark shadow p-10 mb-4 flex flex-col justify-center items-center rounded-xl">


                                    <p className='dark:text-white font-bold'>Email</p>
                                    <p className='dark:text-white font-bold'>ahmadmughal2201@gmail.com</p>
                                    <p className='dark:text-white mt-4 '>Send a Message</p>



                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactMe;
