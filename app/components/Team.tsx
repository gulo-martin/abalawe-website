import React from 'react'

import Image from 'next/image';
import TeamProfile from './ui/TeamProfile';
import BgImage from "../../public/images/pierre-borthiry-peiobty-vBCVcWUyvyM-unsplash.jpg"

import "../globals.css"

function Team() {
  return (
    <div className="bg-[#033C20]  w-full min-h-screen flex justify-center items-center flex-col relative">
        <div className=" w-full h-10 rounded-full absolute -top-20 -left-20 bg-[#033C20]"></div>

        <div className="main z-20 mt-10 mb-10 max-w-7xl w-[90%] mx-auto flex flex-col justify-center items-center ">
            
            <h1 className=" text-4xl md:text-8xl font-bold text-white">Meet Our <span className=" text-green-500">Team</span></h1>
            
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