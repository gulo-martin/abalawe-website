import React from 'react'

import Image, { StaticImageData } from 'next/image';

interface TeamProfileProps {
  image: StaticImageData;
  name: string;
  location: string;
  position: string;
  description: string;
}

function TeamProfile({ image, name, location, position, description } : TeamProfileProps ) {
  return (
    <div className="contain-content  min-w-[320px] w-full bg-white scale-90 md:scale-95 hover:scale-90 transition-all delay-100 ease-in-out select-none shadow-xl rounded-2xl relative team-card-animate">
       <div className={" h-5 bg-[#012b16] w-full"}></div>
        <div className=" w-full justify-center items-center text-white  flex flex-col p-5">
           
            <div className="   bg-white border-4  w-40 h-40 rounded-full shadow flex justify-center items-center text-white font-bold contain-content">
                <Image src={image} className=" w-full h-full object-cover" alt="image" width={180} height={120}/>
            </div>

            <h1 className="text-black font-bold mt-5 text-2xl">{name}</h1>
            <p className="text-gray-700 ">{location}</p>
            <p className="text-gray-500 font-bold my-2">{position}</p>
            <p className="text-gray-500 text-center w-full text-sm mt-2">{description} </p>
         </div>

    </div>
  )
}

export default TeamProfile