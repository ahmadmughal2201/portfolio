"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';


const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const backendUrl = 'https://portfolio-contact-308d2-default-rtdb.firebaseio.com/messages.json'

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                alert('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };


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
                className=" p-24 container mx-auto dark:text-light">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="mb-4 shadow-lg z-10">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-none rounded focus:outline-none focus:border-indigo-500 dark:bg-primaryDark"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4 shadow-lg z-10">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 dark:bg-primaryDark border-none rounded focus:outline-none focus:border-indigo-500"
                                placeholder="Your email address"
                            />
                        </div>
                        <div className="mb-4 shadow-lg z-10">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border dark:bg-primaryDark border-none rounded focus:outline-none focus:border-indigo-500"
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button onClick={handleSubmit} className="dark:bg-dark bg-primaryLight dark:text-white font-bold px-4 py-2 rounded hover:bg-gray-500">Send Message</button>

                    </div>

                    {/* __________________________cards */}
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
