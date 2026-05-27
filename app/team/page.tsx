import React from 'react'
import Team from '../components/Team';
import Image from 'next/image';
import Picture from "../../public/images/bien-arts-p_oUACmH9vQ-unsplash.jpg"

function page() {
  return (
    <div className=" flex flex-col">
        <div className="top h-60">
          <Image src={Picture} alt="image"/>
        </div>
        
        <div className="below flex-1">
          <Team/>
        </div>
    </div>
  )
}

export default page