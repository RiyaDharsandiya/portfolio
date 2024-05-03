import React from 'react'
import {FaGithub,FaLinkedin}from 'react-icons/fa'
import {HiOutlineMail}from 'react-icons/hi'


const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/riya-dharsandiya-b3a448256/",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/RiyaDharsandiya",
        },
        {
            id:3,
            child:(
                <>
                Gmail <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:riyadharsandiya17@gmail.com",
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download})=>
            <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}>
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            target='_blank'
            rel="noreferrer"
            >
                {child}
            </a>
            </li>
            )}
           
        </ul>
    </div>
  )
}

export default SocialLinks