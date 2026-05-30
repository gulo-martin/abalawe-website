import React from 'react'
import Team from '../components/Team';
import Image from 'next/image';
import Picture from "../../public/images/team/f41a27ce19b6cb91f3c2cf814c84845d.png"

function page() {
  return (
    <div className=" flex flex-col min-h-screen w-full">
        <div className="top h-40">
          <Image src={Picture} className="w-full h-full object-cover" alt="image"/>
        </div>
        
        <div className="below flex-1">
          <Team/>
        </div>
    </div>
  )
}

export default page