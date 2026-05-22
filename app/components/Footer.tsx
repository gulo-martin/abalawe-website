import React from 'react'

import Logo from "../../public/images/FB_IMG_1779445211008.jpg"
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { LocateIcon, Phone } from 'lucide-react';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className=" bg-white h-full w-full text-black">
      <div className="inner grid grid-cols-1 md:grid-cols-4 p-4 mx-auto max-w-7xl my-3">

          <div className="flex flex-col p-2">
              <div className="header flex flex-row gap-2 items-center">
                <Image src={Logo} className=" w-10" alt="logo"/>
                <h1 className=" font-bold">Abalawe Online Store</h1>
              </div>
              <p className=" text-[10px] mt-2 leading-6">Trusted for quality products and friendly support. Contact us for any questions or assistance.</p>

              <div className="socials flex gap-3 text-3xl flex-row mt-3 items-center">
                <FaFacebook className=" text-blue-600"/>
                <FaWhatsapp className=" text-green-600"/>
                <FaTiktok className=" text-black-600"/>
                <FaInstagram className=" text-pink-600" />

              </div>
          </div>

          <div className=" p-2">
            <h1 className=" font-bold mt-2">Quick Links</h1>
            <div className="list flex flex-col gap-3 text-[13px] mt-3">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie privacy</p>
              <p>Sitemap</p>
            </div>
            
          </div>

          <div className="p-2">
             <h1 className=" font-bold mt-2">Our services</h1>
            <div className="list flex flex-col gap-3 text-[13px] mt-3">
              <p>Business consulting</p>
              <p>Strategic Planning</p>
            </div>
          </div>

          <div className="p-2">
             <h1 className=" font-bold mt-2">Contact us</h1>
            <div className="list flex flex-col gap-3 text-[13px] mt-3">
              <p className=" flex gap-2 items-center"><LocateIcon/> Mzuzu, luwinga</p>
              <p className=" flex gap-2 items-center"><MdEmail size={23}/> info@abalaweOnlinestore.com</p>
              <p className=" flex gap-2 items-center"><Phone size={23}/> +265 882 271 450</p>

            </div>
          </div>

          <div className=" w-full mx-auto md:col-span-4 mt-3 py-3 flex flex-col-reverse md:flex-row justify-between items-center text-[12px]">
            <p>&copy; {new Date().getFullYear()} AbalaweOnlineStore. All rights reserved</p>

            <nav className=" gap-3 flex text-[10px] mb-5 md:mb-0 flex-row">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie privacy</p>
              <p>Sitemap</p>
            </nav>
          </div>

      </div>
    </div>
  )
}

export default Footer