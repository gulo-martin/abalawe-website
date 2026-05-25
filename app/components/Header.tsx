"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import "../globals.css";

import Image from 'next/image';
import { GiBuyCard } from 'react-icons/gi';

import { ArrowBigDown, ArrowDown, ArrowDownCircle, ArrowUpCircle, Menu, XCircle } from 'lucide-react';
import { BiMenu } from 'react-icons/bi';

function Header() {
    const [show, setShow] = useState<boolean>(false)
    const [show3, setShow3] = useState<boolean>(false)


  return (
    <div className=" w-full fixed top-5 z-50 ">

        <div className="header relative flex justify-between items-center max-w-7xl w-[90%] mx-auto p-2 bg-white dark:bg-black/80 backdrop-blur-2xl rounded-full border border-gray-700/50">

            <Link href={'/'} className=" text-black dark:text-white flex flex-row gap-2 items-center">
                <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-10 rounded-full" alt="logo" width={40} height={40}/>
                <h1 className=" font-bold">Abalawe</h1>
            </Link>
            <nav className="nav-section flex text-black dark:text-white flex-row items-center gap-4 text-sm">
                <div onClick={() => setShow(!show)}  className=" flex gap-2 items-center relative cursor-pointer">Services 
                   {show && (
                     <div className="dropdown absolute w-[200px] top-10 p-4 left-0  bg-white grid grid-cols-1 text-black gap-4" >
                        <p>Services</p> 
                        <p>Services</p>
                        <p>Services</p>
                    </div>
                   )}
                </div>

                <Link href="#products"  className=" flex gap-2 items-center relative cursor-pointer">Products
                  
                </Link>
                <Link href="#contact" className={" bg-green-600 hover:bg-green-700 active:bg-green-800 transition-all  p-3 rounded-full gap-3 flex items-center border text-white border-green-600"}>Get in touch <GiBuyCard/></Link>
            </nav>

            {show3 ? ( <XCircle onClick={() => setShow3(!show3)} className="menu text-black dark:text-white text-3xl active:bg-black/10 rounded-full transition-all ease-in-out mr-1"/>) : (<BiMenu onClick={() => setShow3(!show3)} className="menu text-black dark:text-white text-3xl active:bg-black/10 rounded-full transition-all ease-in-out mr-1"/>)}

           {show3 && (
             <nav className=" absolute bg-white/0 gap-3 backdrop-blur-sm w-full top-17 rounded shadow flex flex-col ease-in-out transition-all">
                <Link href={'/'} className="p-4 w-full text-left border-l-4 border-green-500 bg-zinc-50" >Home</Link>
                <Link href={'/team'} className="p-4 w-full text-left border-l-4 border-green-500 bg-zinc-50" >Team</Link>
                <Link href={'/about'} className="p-4 w-full text-left border-l-4 border-green-500 bg-zinc-50" >About</Link>
            </nav>
           )}

        </div>

    </div>
  )
}

export default Header