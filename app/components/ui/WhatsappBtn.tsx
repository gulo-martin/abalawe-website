import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

function WhatsappBtn() {
  return (
    <>
    {/* <a href="https://wa.me/15551234567"></a> */}
      <Link href="https://wa.me/+265882271450"><FaWhatsapp className=" fixed z-40 text-white rounded-full text-5xl p-2 animate-bounce duration-100 transition-all hover:animate-none cursor-pointer ease-in-out bottom-5 right-5 bg-green-500"/></Link>
    </>
  )
}

export default WhatsappBtn