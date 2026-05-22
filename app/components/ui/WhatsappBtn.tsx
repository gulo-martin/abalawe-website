import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

function WhatsappBtn() {
  return (
    <>
      <FaWhatsapp className=" fixed z-40 text-white rounded-full text-5xl animate-bounce duration-100 transition-all hover:animate-none cursor-pointer ease-in-out bottom-5 right-5 bg-green-500"/>
    </>
  )
}

export default WhatsappBtn