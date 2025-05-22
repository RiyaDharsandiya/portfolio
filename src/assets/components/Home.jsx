import React from 'react';
import { Cursor } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import mainImg from '../portfolio/riya.jpeg';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Home = () => {
    const toRotate = ['Front-end', 'Back-end', 'Software Development'];
    const [loopNum, setLoopNum] = useState(0);
    const [isdeleting, setisDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => clearInterval(ticker);
    });

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isdeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isdeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isdeleting && updatedText === fullText) {
            setisDeleting(true);
            setDelta(period);
        } else if (isdeleting && updatedText === '') {
            setisDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-28  md:flex-row text-white'>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        I have hands on {text} <Cursor cursorStyle='|' />
                    </h2>
                    <p className='text-gray-500 y-4 max-w-md'>
                    Former SDE intern at iDigitize | BscIT Graduate from Usha Pravin Gandhi College
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.img src={mainImg} alt="my profile" className='w-1/2 rounded-full md:w-50 animate-blob pt-10' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} />
            </div>
        </div>
    );
};

export default Home;
