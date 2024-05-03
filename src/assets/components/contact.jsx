import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView();

    return (
        <div name='contact' className='w-full bg-gradient-to-b from-black to-gray-800 text-white h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <motion.p className='text-4xl font-bold inline border-b-4 border-gray-500' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Contact</motion.p>
                    <motion.p className='py-8 text-2xl' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Submit the form below to get in touch with me</motion.p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/pbmqgeeb" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <motion.input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} />
                        <motion.input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} />
                        <motion.textarea name="message" rows="10" placeholder="Enter message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} />
                        <motion.button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Lets talk</motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
