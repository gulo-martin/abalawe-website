import React from 'react'

import Image from 'next/image';
import TeamProfile from './ui/TeamProfile';
import BgImage from "../../public/images/pierre-borthiry-peiobty-vBCVcWUyvyM-unsplash.jpg"

import "../globals.css"

function Team() {
  return (
    <div className="bg-[#058019]  w-full min-h-screen flex justify-center items-center flex-col relative">
        <Image src={BgImage} className=" z-0 absolute top-0 left-0 w-full h-full" alt="image"/>
        <div className=" w-full h-full absolute top-0 left-0 bg-black/30"></div>

        <div className="main z-20 mt-10 mb-10 max-w-7xl w-[90%] mx-auto flex flex-col justify-center items-center ">
            
            <h1 className=" text-4xl md:text-8xl font-bold text-white">Meet Our <span className=" text-green-300">Team</span></h1>
            
            <div className=" w-full grid grid-cols-1 mt-10 md:grid-cols-4 gap-3">
                <TeamProfile/>
                <TeamProfile/>
                <TeamProfile/>
                <TeamProfile/>
            </div>

        </div>
    </div>
  )
}

export default Team