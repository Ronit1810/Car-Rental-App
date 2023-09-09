"use client"

import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 md:leading-10'>
        <div className=' flex flex-col md:justify-center items-start pt-20 md:pt-0 min-h-screen'>
            <h1 className=' text-left font-extrabold text-3xl md:text-6xl'>Premium Car Rental</h1>
            <h1 className=' text-left font-extrabold text-3xl md:text-6xl pt-0'>Near You</h1>
            <span className=' font-normal text-md dark:text-gray-700 text-gray-400 '>Book the selected car effortless & pay for driving only.</span>
            <button className=' bg-slate-600  px-3 rounded-lg text-white mt-4 md:mt-0'>Explore</button>
        </div>
        <div>
            <div className=' rounded-lg md:right-44 absolute bottom-10 right-[1px]  w-[100%] h-[25%] md:w-[25%] md:h-[80%] bg-slate-500'></div>
            <Image className=' absolute md:top-56 bottom-20' src='/car4.png' alt='car' width={550} height={200} />
        </div>
    </div>
  )
}

export default Hero