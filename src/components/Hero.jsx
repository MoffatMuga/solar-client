import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Hero() {


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
            <section className='pt-6'>
              <div className='pt-14'>
                <div className='md:flex items-center sm:flex-col md:flex-row justify-between bg-main-5'>
                  <div className='w-full md:basis-1/2 mb:8 md:mb-0'>
                    <h2>
                      Welcome 
                    </h2>
                  </div>
                  <div className='md:basis-1/2 items-center '>
                    <Image src='/solar-1.jpg'width={400} height={400} className=' w-[500px] h-[500px] object-cover'/>
                    
                  </div>
                </div>

              </div>
              <div className='pt-14'>
                  <div className='  flex justify-center items-center gap-8 sm:px-2'>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                      <h2 className='text-3xl text-text-color text-center font-[700]'>
                        WHAT WE OFFER
                      </h2>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                  </div>
                  <p className='text-center md:px-57 italic text-balance text-black/60 mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quam dolor nulla nihil error maiores dolore, placeat modi nemo at laudantium facilis, sit asperiores. Unde velit eum voluptatem saepe minima?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente! Totam sint quos molestiae illo voluptatum alias ducimus, provident dolores hic nihil expedita, necessitatibus beatae, facere qui ipsam reprehenderit voluptas.
                    
                  </p>
              </div>

            </section>
        </div>
    </div>
  )
}
