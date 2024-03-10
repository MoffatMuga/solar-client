"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Card from '@/components/Card';


export default function home() {

  const images = ["/solar-1.jpg", "/solar-2.jpg", "/solar-3.jpg" ]

  const [currentImg, setCurrentImg] = useState(0)

  const nextImg = () => {
    setCurrentImg((prev) => (prev === images.length -1 ? 0 :prev + 1 ))
  }
  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length -1 : prev -1 ))
  }
  return (

      <div className='container pt-16'>
        <div className='relative w-screen h-screen flex '>
            <Image src={images[currentImg]} height={400} width={400} className='h-[500px] w-[100%] object-cover brightness-75 mt-5 items-center justify-center'/>
            <div className="absolute inset-0 flex justify-between items-center opacity-0 hover:opacity-100">
              <button className="text-white" onClick={prevImg}>
                {'<'}
              </button>
              <button className="text-white" onClick={nextImg}>
                {'>'}
              </button>
          </div>
        </div>
        <section>
            <Card />
        </section>
      </div>
  )
}
