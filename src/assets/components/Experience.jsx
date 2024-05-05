import React, {useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimeLine  from './timeline/TimeLine'
import css from '../css.png'
import html from '../html.png'
import javascript from '../javascript.png'
import tailwind from '../tailwind.png'
import node from '../node.png'
import prisma from '../prisma.jpeg'
import java from '../java.jpeg'
import react from '../react.png'
import php from '../php.jpeg'
import python from '../python.png'
import mobile from '../mobile.jpeg'
import sql from '../sql.png'


const TechItem = ({ src, title, style, style2, percent }) => {
    const { ref, inView } = useInView();
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        if (inView) {
            // Update the barWidth gradually over a specified duration
            const duration = 1000; // Duration in milliseconds
            const interval = 10; // Interval for updating the width
            let totalSteps = duration / interval;
            let stepWidth = percent / totalSteps;
            let currentWidth = 0;
            const timer = setInterval(() => {
                currentWidth += stepWidth;
                setBarWidth(currentWidth);

                // Stop the interval when the width reaches the target percent
                if (currentWidth >= percent) {
                    clearInterval(timer);
                }
            }, interval);

            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }
    }, [inView, percent]);

    return (
        <motion.div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <img src={src} alt="images" className="w-20 mx-auto" />
            <p className={`mt-4 ${style2}`}>{title}</p>
            <div className='bg-purple-500/20 h-4 rounded-full overflow-hidden'>
                <div style={{ width: `${Math.floor(barWidth.toFixed(0))}%` }} className='bg-purple-500 h-full text-xs text-white font-bold'>{percent}%</div>
            </div>
        </motion.div>
    )
};

const Experience = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500",
            percent:100
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500",
            percent:100
        },
        {
            id:3,
            src:javascript,
            title:"Javascript",
            style:"shadow-yellow-500",
            percent:100
        },
        {
            id:4,
            src:node,
            title:"NodeJs",
            style:"shadow-green-500",
            percent:80
        },
        {
            id:5,
            src:tailwind,
            title:"Tailwind Css",
            style:"shadow-cyan-500",
            percent:60
        },
        {
            id:6,
            src:prisma,
            title:"Prisma ORM",
            style:"shadow-blue-500",
            style2:"pt-5",
            percent:80
        },
        {
            id:7,
            src:java,
            title:"Java",
            style:"shadow-red-500",
            style2:"pt-8",
            percent:100
        },
        {
            id:8,
            src:react,
            title:"React",
            style:"shadow-cyan-500",
            percent:80
        },
        {
            id:9,
            src:php,
            title:"Php",
            style:"shadow-purple-500",
            style2:"sm:pt-10 lg:pt-10",
            percent:80
        },
        {
            id:10,
            src:python,
            title:"Python",
            style:"shadow-yellow-500",
            percent:80
        },
        {
            id:11,
            src:mobile,
            title:"Mobile App Dev",
            style:"shadow-pink-500",
            percent:50
        },
        {
            id:12,
            src:sql,
            title:"SQL",
            style:"shadow-green-500 ",
            percent:100
        },
    ]
  return (
    <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black w-full h-100vh text-white'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
                <div className='pt-10'>
                    <p className='text-4xl p-2 font-bold border-b-4 border-gray-500 inline'>Experience</p>
                    <h1 className='text-3xl py-10 '>Work Experience</h1>
                    <div className=''>
                        <TimeLine />
                    </div>
                    <p className='py-20 text-2xl'>These are the technologies I am acquainted with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center pb-20 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style, style2, percent }) => (
                        <TechItem key={id} src={src} title={title} style={style} style2={style2} percent={percent} />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Experience