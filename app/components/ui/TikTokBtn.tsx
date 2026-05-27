import Link from 'next/link';
import React from 'react'
import { FaTiktok } from 'react-icons/fa';

function WhatsappBtn() {
  return (
    <>
    {/* <a href="https://wa.me/15551234567"></a> */}
      <div ><FaTiktok className=" fixed z-40 text-white rounded-full text-5xl p-2 animate-bounce duration-100 transition-all hover:animate-none cursor-pointer ease-in-out bottom-18 right-5 bg-black"/></div>
    </>
  )
}

export default WhatsappBtn