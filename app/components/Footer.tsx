import React from 'react'

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { LocateIcon, Phone } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import BgImage from "../../public/images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
import Link from 'next/link';

function Footer() {
  return (
    <div className=" bg-white h-full flex flex-col w-full text-black relative">

      <div className="bg-image absolute top-0 left-0 z-0 w-full h-full">
        <Image src={BgImage} className=" w-full h-full object-cover" alt="background image" />
      </div>

      <div className=" z-0 absolute left-0 top-0 w-full h-full inset-0 bg-linear-to-r from-black to-black/80"></div>

      <div className=" 500 inner grid grid-cols-1 md:grid-cols-4 p-4 mx-auto max-w-7xl w-full my-3 gap-10 z-50 text-white">

          <div className="flex flex-col p-2">
              <div className="header flex flex-row gap-2 items-center">
                <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-10" alt="logo" width={40} height={40}/>
                <h1 className=" font-bold">Abalawe Online Store</h1>
              </div>
              <p className=" text-[13px] mt-2 leading-6">Trusted for quality products and friendly support. Contact us for any questions or assistance.</p>

              <div className="socials flex gap-3 text-3xl flex-row mt-5 items-center cursor-pointer">
                <FaFacebook className=" text-blue-600"/>
                <FaWhatsapp className=" text-green-600"/>
                <FaTiktok className=" text-black-600"/>
                <FaInstagram className=" text-pink-700" />

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
              <Link href={'/team'}>Team</Link>
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