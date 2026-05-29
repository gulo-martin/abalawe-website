import React from 'react'

import Image from 'next/image';

interface TestimonialCardProps {
  index: number;
  image: string;
  name: string;
  role: string;
  message: string;
}

function TestimonialCard({ index, image, name, role, message }: TestimonialCardProps) {
  return (
    <div className=" p-7 border border-gray-100 shadow-sm rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl relative">
        <div className=" absolute -top-4 left-[45%] bg-blue-600 w-12 h-12 rounded-full shadow flex justify-center items-center text-white font-bold">{index}</div>
        <p className=" text-center text-sm mt-10 mb-10">"{message}"</p>
        <div className=" absolute -bottom-30 left-[35%] justify-center items-center text-white flex flex-col">
            <div className=" bg-white border-4 w-30 h-30 rounded-full shadow flex justify-center items-center text-white font-bold contain-content">
                <Image src={image} className=" w-full h-full object-cover" alt={`${name} avatar`} width={120} height={120}/>
            </div>
            <h1 className="text-black font-bold">{name}</h1>
            <p className="text-blue-500">{role}</p>
         </div>

    </div>
  )
}

export default TestimonialCard