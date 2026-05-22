import React from 'react'

import TImage from "../../public/images/1bd62f60f9ce82763172b9dccf580dae.png";
import Image from 'next/image';

function TesimonialCard() {
  return (
    <div className=" p-7 border border-gray-100 shadow-2xl rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl relative">
        <div className=" absolute -top-4 left-[45%] bg-blue-600 w-12 h-12 rounded-full shadow flex justify-center items-center text-white font-bold">1</div>
        <p className=" text-center mt-10 mb-10">"Abalawe provided excellent service and fast delivery. The product quality exceeded my expectations — highly recommended!"</p>
        <div className=" absolute -bottom-30 left-[35%]      justify-center items-center text-white  flex flex-col">
       
            <div className="   bg-white border-4  w-30 h-30 rounded-full shadow flex justify-center items-center text-white font-bold contain-content">
                <Image src={TImage} className=" w-full h-full object-cover" alt="image"/>
            </div>

            <h1 className="text-black font-bold">Favour Maneno</h1>
            <p className="text-blue-500">customer</p>
         </div>

    </div>
  )
}

export default TesimonialCard