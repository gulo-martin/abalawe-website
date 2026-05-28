import React from 'react'

import Code from "../../public/images/digitalcommons.png";
import Picture from "../../public/images/others/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';


function QrCode() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-x-hidden">
        <div className=" w-20 h-90 rounded-full absolute bottom-0 -right-10 bg-[#033C20]"></div>
        <div className=" w-30 h-90 rounded-full absolute -top-0 -left-20 bg-[#033C20]"></div>

        <div className="all z-10 w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">

            <div className="left col-span-2 flex gap-4 flex-col w-full mx-auto h-[70vh] md:w-full justify-center items-center contain-content rounded-3xl">
                <Image src={Picture} className=" h-full object-cover w-full" alt="image"/>
            </div>

           
            <div className="right w-full mx-auto flex flex-col justify-center items-center">
                <div className="left col-span-2 flex gap-4 flex-col w-[80%] mx-auto md:w-full justify-center text-left md:items-center p-2">
                    <h1 className=" text-xl md:text-3xl font-bold uppercase flex flex-start items-center gap-3">Join the community <FaWhatsapp className=" text-green-500"/> </h1>
                    <p className="  text-sm">Be one of us, to shop quality, good and strong things</p>
                    {/* <button className=" bg-green-500 p-3 font-bold rounded-3xl shadow text-white w-[60%]">Scan the QR code</button> */}
                </div>

                <Image src={Code} alt="image"/>
            </div>

        </div>

    </div>
  )
}

export default QrCode