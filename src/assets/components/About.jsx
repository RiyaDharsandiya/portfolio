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
                    I am currently pursuing a bachelor's degree (BscIT) from Usha Pravin Gandhi College of Science, Arts, and Commerce. I am currently in the second year. I have worked at iDigitize as an ex-backend-intern and learned Nodejs, Express, Prisma, MongoDB, PhP, SQL. I have also learned many languages like C, C++, HTML, CSS, JavaScript, PHP, SQL, MySQL, Advance PHP, Python, Core Java, Data Structures and will be keen to learn more. I have made small projects based on web development, React, Nodejs.
                </motion.p>
            </div>
        </div>
    );
}

export default About;
