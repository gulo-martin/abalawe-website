import React from 'react'

import Image from 'next/image';
import { Send } from 'lucide-react';
import TestimonialCard from './TesimonialCard'

function Testimonials() {
  return (
    <div className="bg-white w-full min-h-screen mb-40 md:mb-0">
        <div className="main max-w-7xl w-[90%] mx-auto flex flex-col">
            <h1 className=" text-center text-md font-bold mt-20 text-red-500">Testimonials</h1>
            <p className=" w-[80%] mx-auto text-center text-4xl md:text-6xl font-bold  py-5 mt-0 mb-0">Take a Look at What Our Amazing Clients have said</p>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full mt-9 gap-50 md:gap-20">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>

        </div>
    </div>
  )
}

export default Testimonials