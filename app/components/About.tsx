"use client"
import { LocateIcon, Phone } from 'lucide-react';
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// import MAinVideo from "../"

function About() {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center py-10">

        <div className=" w-[90%] gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">

          <div className=" md:col-span-3 text-left">
            <h1 className=" text-5xl border-l-4 pl-4 border-green-500 font-bold mb-5">About us</h1>
          </div>

          <div className=" w-full h-[50vh] md:h-full  md:col-span-2 contain-content rounded-2xl">
            <video autoPlay muted loop controls src="/videos/brand.mp4" type="video/mp4" accentcolor="blue"  className=" w-full h-full object-cover"/>
          </div>

          <div className=" w-full p-4 tracking-wider flex flex-col">
            <h1 className=" text-3xl mb-4 font-bold">Abalawe online store</h1>
            <p className=" text-gray-600">Welcome to Abalawe Online Store — your destination for quality products and dependable service. We carefully select items you'll love, offer competitive prices, and provide fast, reliable shipping.</p>
            <div className="socials flex gap-3 text-3xl flex-row mt-5 items-center cursor-pointer">
              <FaFacebook className=" text-blue-600"/>
              <FaWhatsapp className=" text-green-600"/>
              <FaTiktok className=" text-black-600"/>
              <FaInstagram className=" text-pink-700" />

            </div>

            {/* <div className="list flex flex-col gap-3 text-[13px] mt-6">
              <p className=" flex gap-2 items-center"><LocateIcon/> Mzuzu, luwinga</p>
              <p className=" flex gap-2 items-center"><MdEmail size={23}/> info@abalaweOnlinestore.com</p>
              <p className=" flex gap-2 items-center"><Phone size={23}/> +265 882 271 450</p>

            </div> */}
          </div>

        </div>

    </div>
  )
}

export default About