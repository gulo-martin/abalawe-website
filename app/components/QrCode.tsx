import React from 'react'

import Code from "../../public/digitalcommons.png";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';


function QrCode() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-x-hidden">
        <div className=" w-20 h-90 rounded-full absolute bottom-0 -right-10 bg-green-600"></div>
        <div className=" w-30 h-90 rounded-full absolute -top-0 -left-20 bg-green-600"></div>

        <div className="all z-10 w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">

            <div className="left col-span-2 flex gap-4 flex-col w-[80%] mx-auto md:w-full justify-center items-center">
                <h1 className=" text-4xl md:text-6xl font-bold uppercase flex items-center gap-3">Join the community <FaWhatsapp className=" text-green-500" size={55}/></h1>
                <p className="  text-md">Be one of us, to shop quality, good and strong things</p>
                <button className=" bg-green-500 p-3 font-bold rounded-3xl shadow text-white w-[60%]">Scan the QR code</button>
            </div>

            <div className="right w-full mx-auto flex justify-center items-center">
                <Image src={Code} alt="image"/>
            </div>

        </div>

    </div>
  )
}

export default QrCode