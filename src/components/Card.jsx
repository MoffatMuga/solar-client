import React from 'react'
import Image from 'next/image'

const cards = [
    {
        image: "/solar-flood-light.jpg",
        title: "SOLAR FLOOD LIGHT ",
        description: ""
    },
    {
        image: "/solar-water.webp",
        title: "SOLAR WATER HEATER",
        description: ""
    },
    {
        image: "/solar-installation.jpg",
        title: "SOLAR PV DESIGNING",
        description: ""
    },
    {
        image: "/solar-maintenance.jpg",
        title: "SOLAR MAINTENANCE",
        description: ""
    }
]

export default function Card() {
  return (
    <div className='items-center md:flex md:flex-row '>

        {cards.map((card, index) => (
            <div key={index} className='rounded shadow-md gap-3 px-4 h-[450px] md:w-[300px]'>
                <Image src={card.image} height={400} width={200} className='h-[250px] w-full object-cover'/>
                <h2 className='flex justify-center bg-main-1  text-white bg-opacity-70'>{card.title}</h2>
                <p>{card.description}</p>
            </div>
        ))}

    </div>
  )
}
