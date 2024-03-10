import React from 'react'
import Link from 'next/link'

const links = [
    {
        title:"HOME",
        path:"/",
    },
    {
        title:"ABOUT",
        path:"/about",
    },
    {
        title:"PRODUCTS",
        path:"/products",
    },
    {
        title:"CONTACT",
        path:"/contact",
    },
]
export default function Links() {
  return (
    <div className=' flex gap-4 font-bold hover:text-main-1'>
        {links.map((link =>(
            <Link href={link.title} key={link.title}>
                {link.title}
            </Link>
        )))}
    </div>
  )
}
