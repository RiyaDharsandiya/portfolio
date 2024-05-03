import React, { useState } from 'react'
import {FaBars,FaTimes,} from 'react-icons/fa'
import {Link} from 'react-scroll'
const NavBar = () => {
    /* state-to change ctate onclick fabars(eg) */
    const [nav,setNav]= useState(false)
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-50' >
         <div>
            <h1 className="font-signature lg:text-5xl ml-2 md:text-4xl sm:text-5xl">Riya Dharsandiya</h1>
         </div>
         
         <ul className='hidden md:flex' /* md-media query */> 
            {links.map(({id,link })=>   /*key-when we loop over an arrary and map any change we can make thorugh key*/
            <li key={id} 
            className='px-4 cursor-pointer capitalize font-medium 
            text-gray-500 hover:scale-105 duration-200 hover:border-b-4 border-gray-500 inline'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>)}  
        </ul>
        <div onClick={()=>setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10  text-gray-500'>
       {nav?<FaTimes size={30} className='absolute right-10'/>:<FaBars size={30}/>} 
        </div>

        {nav?<ul className='flex flex-col justify-center items-center text-gray-500 relative top-60  right-0 w-50 h-50 bg-gradient-to-b from-black to-gray-800'>
            {links.map(({id,link})=>
            <li key={id} 
            className='px-4 cursor-pointer capitalize py-6 text-4xl hover:border-b-4 border-gray-500 inline'>
                <Link to={link} smooth duration={500} onClick={()=>setNav(!nav)}>{link}</Link>
            </li>
            )}
        </ul>:null}
    </div>
  )
}

export default NavBar