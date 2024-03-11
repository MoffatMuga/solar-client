import React from 'react'
import Link from 'next/link'
import Links from './links/Links'



export default function Navbar() {
  return (
    <div className=' flex h-16 justify-between shadow-lg z-50'>
        <div className='flex j flex-col items-center '>
            <p className='rounded-full bg-main-1 text-white px-3 py-1 mt-1'>
                Solar
            </p>
            <p>
                Spark solutions
            </p>
        
        </div>
        <div className='flex pt-4 '>  
            <Links />
        </div>
       
    </div>
  )
}
