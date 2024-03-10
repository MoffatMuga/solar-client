import React from 'react'
import Image from 'next/image'

const cards = [
    {
        image: "/solar-flood-light.jpg",
        title: "SOLAR FLOOD LIGHT INSTALLATION",
        description: ""
    },
    {
        image: "/solar-water.webp",
        title: "SOLAR WATER HEATER",
        description: ""
    },
    {
        image: "/solar-installation.jpg",
        title: "SOLAR PV DESIGN INSTALLATION",
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
    <div className='flex flex-row justify-between '>

        {cards.map((card, index) => (
            <div key={index} className='rounded shadow-md gap-3 px-4 h-[450px] w-[300px]'>
                <Image src={card.image} height={400} width={400} className='h-[300px] w-[300px] object-cover'/>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
            </div>
        ))}

    </div>
  )
}
