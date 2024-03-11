"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';


export default function home() {

  return (

      <div className=' pt-0 '>
          <div>
            <section>
              <Hero />
            </section>
          </div>

        
            <div >
                <section className='mt-8 mb-10'>
                    <Card />
                </section>
            </div>
            <div>
                <section>
                  <Footer />
                </section>
            </div>
      </div>
  )
}
