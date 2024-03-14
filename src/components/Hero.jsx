import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Hero() {

    const images = ["/solar-1.jpg", "/solar-2.jpg", "/solar-3.jpg" ]

    const [currentImg, setCurrentImg] = useState(0)

  const nextImg = () => {
    setCurrentImg((prev) => (prev === images.length -1 ? 0 :prev + 1 ))
  }
  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length -1 : prev -1 ))
  }


  return (
    <div>
        {/* <div className='relative flex flex-col mt-4'>
            <Image src={images[currentImg]} height={400} width={400} className=' object-cover items-center'/>
            <div className="absolute inset-0 flex justify-between items-center ">
              <button className="text-white text-4xl px-3 py-2   border-4" onClick={prevImg}>
                {'<'}
              </button>
              <button className="text-white text-4xl px-3 py-2 border-4" onClick={nextImg}>
                 {'>'}
              </button>
          </div>
        </div> */}

        <div>
            <div className=''>

            </div>
        </div>
    </div>
  )
}
