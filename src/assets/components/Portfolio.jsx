import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import css from '../portfolio/basic-css.jpeg';
import calculator from '../portfolio/calculator.jpeg';
import currency from '../portfolio/currency-convertor.jpeg';
import googleClone from '../portfolio/google-clone.jpeg';
import toDoList from '../portfolio/to-do-list.jpeg';
import weatherApp from '../portfolio/weather-app.jpeg';
import loginSignup from '../portfolio/loginsignup.jpeg';
import calender from '../portfolio/calender.png';
import snake from '../portfolio/snake.png';

const PortfolioItem = ({ id, image, view, code, style, title }) => {
    const { ref, inView } = useInView();

    return (
        <motion.div key={id} className='shadow-md shadow-gray-600 rounded-lg' ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <motion.img src={image} alt={title} className={`rounded-md relative z-10 ${style} hover:scale-105 duration-200`} 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} // Initial scale reduced to 95%
             // Scale back to 100% when in view
            whileHover={{ scale: 1.05 }} // Scale to 105% on hover
           
            animate={inView ? { opacity: 1, y: 0 ,position:"relative",zIndex:20} : {}} transition={{ duration: 0.5 }} />
            <div className='flex items-center justify-center'>
                <a href={view} target='_blank' rel="noreferrer">
                    <button className='w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500'>View</button>
                </a>
                <a href={code} target='_blank' rel="noreferrer">
                    <button className='w-2/3 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500'>Code</button>
                </a>
            </div>
            <p className='text-2xl md:text-sm '>{title}</p>
        </motion.div>
    );
};


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            image: loginSignup,
            view: "https://twitter.com/RiyaDharsandiya/status/1762822116183863689",
            code: "https://github.com/RiyaDharsandiya/login-signup-project",
            style: "lg:h-60 sm:h-60",
            title: "Login-SignUp-Page[NodeJs]"
        },
        {
            id: 2,
            image: weatherApp,
            view: "https://riyadharsandiya.github.io/weather-app/",
            code: "https://github.com/RiyaDharsandiya/weather-app",
            style: "lg:h-60 md:h-60",
            title: "WeatherApp[HTML,CSS,JS]"
        },
        {
            id: 3,
            image: toDoList,
            view: "https://riyadharsandiya.github.io/todolist/",
            code: "https://github.com/RiyaDharsandiya/to-do-list",
            style: "lg:h-60 md:h-60",
            title: "To Do List[HTML,CSS,JS]"
        },
        {
            id: 4,
            image: currency,
            view: "https://riyadharsandiya.github.io/currency-converter/",
            code: "https://github.com/RiyaDharsandiya/currency-converter",
            style: "lg:h-80 md:h-80",
            title: "Currency Convertor[HTML,CSS,JS]"
        },
        {
            id: 8,
            image: snake,
            view: "https://snake-game-95p6.onrender.com/",
            code: "https://github.com/RiyaDharsandiya/snake-game",
            style: "lg:h-80 lg:w-80 md:h-80",
            title: "Snake Game[NodeJs]"
        },
        {
            id: 9,
            image: calender,
            view: "https://riyadharsandiya.github.io/dynamic-calender/",
            code: "https://github.com/RiyaDharsandiya/dynamic-calender",
            style: "lg:h-80 lg:w-80 md:h-80",
            title: "Dynamic Calender[HTML,CSS,JS]"
        },
        {
            id: 5,
            image: googleClone,
            view: "https://riyadharsandiya.github.io/basic-google-clone/",
            code: "https://github.com/RiyaDharsandiya/basic-google-clone",
            style: "lg:h-80 sm:h-80",
            title: "Google Clone[HTML,CSS,JS]"
        },
        {
            id: 6,
            image: calculator,
            view: "https://riyadharsandiya.github.io/calculator/",
            code: "https://github.com/RiyaDharsandiya/calculator1",
            style: "md:h-80",
            title: "Basic Calculator[HTML,CSS,JS]"

        },
        {
            id: 7,
            image: css,
            view: "https://riyadharsandiya.github.io/card-hovereffect/",
            code: "https://github.com/RiyaDharsandiya/card-hovereffect",
            style: "lg:h-80 md:h-80 ",
            title: "Css Hover effect[HTML,CSS,JS]"
        },
    ];
    return (
        <div name="portfolio" className='w-full h-500 bg-gradient-to-b from-black to-gray-800 text-white pt-80'>
            <div className='max-w-screen-lg pb-16 mx-auto flex flex-col justify-center w-full h-300vh'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <br />
                    <p className='py-6 text-2xl'>Check out some portfolios here.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:px-5 px-5'>
                    {portfolios.map((item) => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>
                <p className='py-6 text-2xl'>For more details, you can check LinkedIn/Github.</p>
            </div>
        </div>
    );
};

export default Portfolio;