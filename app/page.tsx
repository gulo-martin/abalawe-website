"use client"

import Image from "next/image";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Link from "next/link";
import QrCode from "./components/QrCode";
import Products from "./components/Products";
import { GiBuyCard } from 'react-icons/gi';
import About from "./components/About";
import { useState } from "react";
import Splash from "./components/Splash";
import { FastForward } from "lucide-react";
import { MdFlashlightOn } from "react-icons/md";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";



export default function Home() {
  
  
  return (
    <div className="flex flex-col items-center justify-start  bg-white font-sans relative">
       {/* <Splash/> */}

        {/* home-page */}
        <div className="home-section relative contain-content flex justify-center items-center flex-col bg-black h-[90vh] w-full z-10">

          <div className="bg-image absolute top-0 left-0 z-0 w-full h-full">
            <Image src="/images/bg/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg" className=" w-full h-full object-cover" alt="background image" width={1920} height={1080}/>
          </div>

          <div className=" absolute left-0 top-0 w-full h-full inset-0 bg-linear-to-r from-black to-black/50"></div>

          <div className="details z-20 p-7 grid md:grid-cols-3 gap-4 mx-auto max-w-7xl flex-row text-white">

            <div className="home-image2  justify-start items-start">
              <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-[50%] rounded-full" alt="logo" width={500} height={500}/>
            </div>
            
            <div className="home-details col-span-2 flex justify-center items-start flex-col">
              <h1 className=" text-3xl md:text-7xl font-bold">Abalawe online store</h1>
              <p className=" mt-3 ">Welcome to Abalawe Online Store — your destination for quality products and dependable service. We carefully select items you'll love, offer competitive prices, and provide fast, reliable shipping.</p>

              <div className="nutton mt-5 ">
                <Link href="#contact" className=" bg-linear-to-r from-[#056133] hover:from-[#036e39] hover:to-[#058143] to-[#034727] border text-white border-green-600 p-3 px-20 cursor-pointer rounded-full flex items-center gap-3">Get in touch <GiBuyCard className=" text-2xl"/> </Link>
              </div>


            </div>

            <div className="home-image flex justify-center items-center">
              <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-[80%] rounded-full" alt="logo" width={500} height={500}/>
            </div>

          </div>

        </div>

        {/* cta */}
        <div className="service bg-[#BBE1BB] py-15 md:py-10 w-[100%] max-x-7xl mx-auto flex justify-center items-center">
            <div className="services w-[90%] mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">

                   
              <div  className=" hover:scale-105 transition-all ease-in-out p-5 justify-center items-center bg-white flex flex-col rounded shadow">
                  <FastForward color="#033C20" size={35}/>
                  <h1 className=" text-2xl font-bold mt-2 capitalize">Fast</h1>
                  <p className=" text-sm my-3 text-center">Enjoy speedy order processing and prompt delivery so your favorite items arrive when you need them.</p>
                  <Link href={'/contact'} className=" bg-[#033C20] cursor-pointer hover:bg-[#095530] active:bg-[#033C20] p-3 text-sm text-white">Learn More</Link>
              </div>

               <div  className=" md:scale-105 md:hover:scale-100 transition-all ease-in-out p-5 justify-center items-center bg-white flex flex-col rounded shadow">
                  <RiCheckboxMultipleBlankLine color="#033C20" size={35}/>
                  <h1 className=" text-2xl font-bold mt-2 capitalize">Reliable</h1>
                  <p className=" text-sm my-3 text-center">Count on consistent quality and attentive support from our team every step of the way.</p>
                  <Link href={'/contact'} className=" bg-[#033C20] cursor-pointer hover:bg-[#095530] active:bg-[#033C20] p-3 text-sm text-white">Learn More</Link>
              </div>

               <div  className=" hover:scale-105 transition-all ease-in-out p-5 justify-center items-center bg-white flex flex-col rounded shadow">
                  <MdFlashlightOn color="#033C20" size={35}/>
                  <h1 className=" text-2xl font-bold mt-2 capitalize">Fashion</h1>
                  <p className=" text-sm my-3 text-center">Discover stylish selections curated for modern living, from wardrobe essentials to standout accessories.</p>
                  <Link href={'/contact'}  className=" bg-[#033C20] cursor-pointer hover:bg-[#095530] active:bg-[#033C20] p-3 text-sm text-white">Learn More</Link>
              </div>

            </div>
        </div>

        <div id="products"> <Products/> </div>
        <QrCode/>
       
        {/* testimonials */}
        <Testimonials/>

        {/* <Team/> */}
        
        {/* contact */}
        <div id="contact" className="contact "> <Contact/>  </div>

        <About/>
    
    </div>
  );
}
