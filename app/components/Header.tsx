"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import "../globals.css";

import Image from 'next/image';
import { GiBuyCard } from 'react-icons/gi';

import { ArrowBigDown, ArrowDown, ArrowDownCircle, ArrowUpCircle, UserCheck, XCircle } from 'lucide-react';
import { BiMenu, BiUser } from 'react-icons/bi';
import { FaTeamspeak } from 'react-icons/fa';
import { FaProductHunt } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { IoCart } from 'react-icons/io5';

function Header() {
    const [show, setShow] = useState<boolean>(false)
    const [show3, setShow3] = useState<boolean>(false)


  return (
    <div className=" w-full fixed top-5 z-50 ">

        <div className="header relative flex justify-between items-center max-w-7xl w-[90%] mx-auto p-2 bg-white dark:bg-black/80 backdrop-blur-2xl rounded-full border border-green-700/60">

            <Link href={'/'} className=" text-black dark:text-white flex flex-row gap-2 items-center">
                <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-10 rounded-full" alt="logo" width={40} height={40}/>
                <h1 className=" font-bold">Abalawe</h1>
            </Link>
            <nav className="nav-section flex text-black dark:text-white flex-row items-center gap-4 text-sm">
                <Link href="/cart"  className=" flex gap-2 items-center relative cursor-pointer">Cart </Link>
                <div onClick={() => setShow(!show)}  className=" flex gap-2 items-center relative cursor-pointer">Services 
                   {show && (
                     <div className="dropdown capitalize absolute w-[200px] top-10 p-4 left-0  bg-white grid grid-cols-1 text-black gap-4" >
                        <Link href="/team">Team</Link> 
                        <Link href="/testimonials">testimonials</Link>
                        <p>code of conduct</p>
                        <Link href="/about">About Us</Link>
                    </div>
                   )}
                </div>

                <Link href="/products"  className=" flex gap-2 items-center relative cursor-pointer">Products
                  
                </Link>
                <Link href="/contact" className={" bg-[#056133] hover:bg-green-700 active:bg-green-800 transition-all  p-3 rounded-full gap-3 flex items-center border text-white border-green-600"}>Get in touch <GiBuyCard/></Link>
            </nav>
            
            <div className="left flex items-center gap-4">
                <Link href="/cart" className=""><IoCart className="text-black dark:text-white text-2xl"/></Link>
                {show3 ? ( <XCircle onClick={() => setShow3(!show3)} className="menu text-black dark:text-white text-3xl active:bg-black/10 rounded-full transition-all ease-in-out mr-1"/>) : (<BiMenu onClick={() => setShow3(!show3)} className="menu text-black dark:text-white text-3xl active:bg-black/10 rounded-full transition-all ease-in-out mr-1"/>)}
            </div>
           

        </div>


        {show3 && (
            <nav onClick={() => setShow3(!show3)} className=" fixed duration-200    gap-0 backdrop-blur-sm w-[100%] h-screen top-0 rounded shadow flex flex-col ease-in-out transition-all">
                <nav className=" fixed duration-200 z-20   bg-[#f6f6f6] gap-0 backdrop-blur-2xl w-[70%] h-screen top-0 rounded shadow flex flex-col ease-in-out transition-all">
                    <div className="main-box flex-1">

                            {/* top-section */}
                            <div className="bg-[#033C20] border border-[#333]/50 h-30 w-full flex justify-start px-5 items-center">
                                <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-20 rounded-full" alt="logo" width={70} height={70}/>

                            </div>
                            <div className="main flex flex-col gap-1 mt-0 px-0">
                                {/* <Link href={'/team'} className="p-4  w-full text-left bg-linear-to-r from-[#056133] hover:from-[#036e39] hover:to-[#058143] to-[#034727]  text-white border border-green-500 flex justify-between items-center" >Team <FaTeamspeak size={20}/></Link> */}
                                <Link href={'/'} className="p-4 text-sm w-full text-left bg-white 500 text-black flex justify-between items-center" >Profile <BiUser size={20}/></Link>
                                <Link href={'/products'} className="p-4 w-full text-sm text-left bg-white text-black flex justify-between items-center" >Products <FaProductHunt size={20}/> </Link>
                                <Link href={'/testimonials'} className="p-4 text-sm w-full text-left bg-white text-sm  flex justify-between items-center" >Testimonials <UserCheck size={20}/> </Link>

                                <Link href={'/about'} className="p-4 text-sm w-full text-left bg-white 500 text-black flex justify-between items-center" >About <FcAbout size={20}/></Link>
                            </div>
                    </div>

                    <div className=" h-10 bg-white w-full text-[10px] flex justify-center items-center">
                        &copy; {new Date().getFullYear()} Abalawe online store
                    </div>
                </nav>
            </nav>
           )}

    </div>
  )
}

export default Header