import React from 'react'
import Link from 'next/link'
import Links from './links/Links'



export default function Navbar() {
  return (
    <div className='flex  top-0 left-0 pt-4 mb-0 container fixed items-center h-16  shadow-lg z-50'>
        <div className=' flex items-center justify-start flex-grow-1 flex-col'>
            <p className='rounded-full bg-main-1 text-white px-3 py-1'>
                Solar
            </p>
            <p>
                Spark solutions
            </p>
        
        </div>
        <div className=' flex items-center justify-end flex-grow '>  
            <Links />
        </div>
       
    </div>
  )
}
