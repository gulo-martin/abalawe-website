import React from 'react'
import Team from '../components/Team';
import Image from 'next/image';
import Picture from "../../public/images/b94da8b0c7884a55a40a56af635856be.jpg"

function page() {
  return (
   <div className=" flex flex-col">
        <div className="top h-60 w-full">
          <Image src={Picture} className=" w-full h-full object-cover" alt="image"/>
        </div>
        
        <div className="below flex-1">
      
        </div>
    </div>
  )
}

export default page