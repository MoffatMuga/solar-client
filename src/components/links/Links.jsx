"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { CgMenuGridO } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";


const links = [
    {
        title:"Home",
        path:"/"
    },
    {
        title:"About",
        path:"/About"
    },
    {
        title:"Contact",
        path:"/Contact"
    },
    {
        title:"Products",
        path:"/Products"
    }
]

export default function Links() {

    const [navOpen, setNavOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() =>{
        function handleResize () {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            })
            if( dimensions.width > 760 && navOpen) {
                setNavOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return (_) => {
            window.removeEventListener('resize', handleResize)
        };
    }) 

    const menuMobileHandler = () => {
        setNavOpen(!navOpen);
        console.log('clicked')
    }
  return (
    <div className='block'>
        <div className='lg:block hidden space-x-4'> 
            {links.map((link, index) => (
                <Link href={link.title} key={index}>
                    {link.title}
                </Link>
            ))}
        </div>

        <button className='lg:hidden items-center text-3xl' onClick={menuMobileHandler}>
            <CgMenuGridO />
        </button>

        <div className={ navOpen? "py-0 fixed block w-screen z-[9999]" :"py-0 fixed hidden w-screen z-[9999]"}>
            <div className='z-[999] bg-black bg-opacity-50 fixed top-0 w-screen h-screen'></div>
            <div className='bg-white z-[9999] fixed right-0 top-0 h-screen w-[260px]'>
                <div className='h-14 px-10 flex border-b items-center'>
                    <button className='flex items-center space-x-3' onClick={menuMobileHandler}>
                        <GrClose />
                    </button>
                    
                </div>
                <div className='h-full py-3 px-10 overflow-y-scroll scroll-smooth '>
                    <ul className=' flex flex-col space-y-4 mb-7'>
                        {links.map((link, index) => (
                            <Link href={link.path} key={index} className='trnsition-all ease-in-out duration-300 hover:text-main-1'>
                                {link.title}
                                <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                    <MdKeyboardArrowRight className="text-xl"/> 
                                </span>
                            </Link>
                            
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}
//className={navOpen?"py-0 fixed block w-screen z-[9999]":"py-0 fixed block w-screen z-[9999]"}