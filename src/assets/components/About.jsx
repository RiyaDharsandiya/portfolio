import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Adjust this threshold as needed
    });

    useEffect(() => {
        if (inView) {   
            // Run animation when About section is in view
            const elements = document.querySelectorAll('.animate-about');
            elements.forEach(element => {
                element.style="overflow-hidden"
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100);
            });
        }
    }, [inView]);

    return (
        <div name="about" ref={ref} className='w-full h-80vh bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-2  mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline overflow-hidden border-b-4 border-gray-500 animate-about'>About</p>
                </div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className='text-xl mt-20 animate-about'>
                I recently completed my Bachelor of Science in Information Technology (BScIT) from Usha Pravin Gandhi College of Arts ,Science and Commerce .I am passionate about building modern, user-friendly web applications. With a strong foundation in web development, I'm now focusing on becoming a skilled Full Stack Developer, with a special interest in the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                During my academic journey, I’ve gained hands-on experience through various projects involving frontend and backend development, API integration, database management, and responsive design. I enjoy solving problems, learning new technologies, and creating seamless digital experiences.
                </motion.p>
            </div>
        </div>
    );
}

export default About;
