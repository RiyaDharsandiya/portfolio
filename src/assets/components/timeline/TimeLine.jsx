import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Circle from './circle';
import EventCard from './eventCard';
import Pillar from './pillar';

const TimeLine = () => {
    const events = [
        {
            id: 1,
            heading: "iDigitize Infotech LLP · Part-time onsite",
            subheading: "Backend intern and tester",
            date: "08/2023 – 01/2024",
            place: "Mumbai, India",
            description: "I expanded my knowledge in the web development field and learnt NodeJs,Express,Prisma,PhP,MongoDb during this period.I worked on databases and creation of API's using the MVC model.I have solved many tasks , real time problems and got a hands on building a project as and when given by my mentor. As a tester I have tested the websites and reported the bugs and problems.",
            direction: "right",
        },
        {
            id: 2,
            heading: "Bharat Intern · Part-time (virtual internship)",
            subheading: "Front end intern",
            date: "07/2023 – 08/2023",
            place: "Mumbai, India",
            description: "Made static projects using html,css,javascript.",
            direction: "left",
        },
        {
            id: 3,
            heading: "Oasis Infobyte · Part-time(Virtual Internship)",
            subheading: "Front end intern",
            date: "07/2023 – 08/2023",
            place: "Mumbai, India",
            description: "Made static projects using html,css,javascript.",
            direction: "right",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5, // Adjust the delay between animations
            },
        },
    };

    return (
        <motion.div className='flex flex-col gap-y-3 with-full bg-gradient-to-b from-gray-800 to-black w-full h-90vh text-white' variants={containerVariants} initial='hidden' animate='visible'>
            <Circle />
            {events.map((event, key) => (
                <Fragment key={key}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {event.direction === 'left' ? (
                            <motion.div variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                                <EventCardWithAnimation direction='left' event={event}>
                                <EventCard
                                    heading={event.heading}
                                    subheading={event.subheading}
                                    date={event.date}
                                    place={event.place}
                                    description={event.description}
                                />
                            </EventCardWithAnimation>
                            </motion.div>
                        ) : (
                            <div></div>
                        )}
                        <Pillar />
                        {event.direction === 'right' ? (
                            <motion.div variants={{
                                hidden: { opacity: 0, x: 20 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                               <EventCardWithAnimation direction='right' event={event}>
                                <EventCard
                                    heading={event.heading}
                                    subheading={event.subheading}
                                    date={event.date}
                                    place={event.place}
                                    description={event.description}
                                />
                            </EventCardWithAnimation>
                            </motion.div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    {key < events.length - 1 && <Circle />}
                </Fragment>
            ))}
            <Circle />
        </motion.div>
    );
};

const EventCardWithAnimation = ({ direction, event, children }) => {
    const { ref, inView } = useInView();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction === 'left' ? 20 : 20 }}
            animate={inView ? { opacity: 1,
                transition: {
                staggerChildren: 0.5,}, // Adjust the delay between animations  
            x: 0 } : {}}
            transition={{ duration: 0.5}}
        >
            {children}
        </motion.div>
    );
};
export default TimeLine;
