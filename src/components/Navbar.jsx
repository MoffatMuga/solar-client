import React from 'react'
import Link from 'next/link'
import Links from './links/Links'



export default function Navbar() {
  return (
    <div className=' flex shadow-lg md:flex-row justify-between fixed left-0 right-0 md:px-20 sm:px-3 bg-white'>
        <div className='flex  flex-col items-center '>
            <p className='rounded-full bg-main-1 text-white px-3 py-1 mt-1'>
                Solar
            </p>
            <p>
                Spark solutions
            </p>
        
        </div>
        <div className=' pt-4 '>  
            <Links />
        </div>
       
    </div>
  )
}
