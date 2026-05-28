import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

function ContactDetails() {
  return (
    <div className=" flex items-center gap-3">
        <Link href="https://www.facebook.com/profile.php?id=61589106463076" target="_blank" rel="noopener noreferrer">
            <FaFacebook className=" text-blue-600"/>
        </Link>
        <Link href="https://wa.me/+265999597215" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className=" text-green-600"/>
        </Link>
        <Link href="https://www.tiktok.com/@abalawe_online_store?_r=1&_t=ZS-96jM4i1hegG" target="_blank" rel="noopener noreferrer">
            <FaTiktok className=" text-black-600"/>
        </Link>
        <Link href="https://www.instagram.com/abalawe_online_store?igsh=ejg5bGhjaTdtdWwx" target="_blank" rel="noopener noreferrer">
            <FaInstagram className=" text-pink-700" />
        </Link>
    </div>
  )
}

export default ContactDetails