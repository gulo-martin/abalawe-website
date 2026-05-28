"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Picture from "../../public/images/bien-arts-p_oUACmH9vQ-unsplash.jpg"

function Splash() {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShow(false)
    }, 3000);
  
    return () =>  clearTimeout(timer);
  }, [])
  
  if(!show) return null;

  return (
    <div className=" flex bg-[#033C20] justify-center items-center flex-col fixed top-0 z-50 left-0 w-full h-screen">

      <div className=" w-full h-full absolute top-0 left-0 bg-black">
          <Image src={Picture} className=" h-full w-full object-cover z-0" alt="splash image" />
      </div>

      <div className=" bg-[#033C20]/90 inset-0 absolute top-0 left-0 w-full h-full z-10"></div>

        <div className="circle  relative  flex flex-col items-center gap-4 p-2 rounded-full border-4 border-gray-50/50 z-20">
           <div className="circle w-30 h-30 border-l-4 relative border-l-green-600 animate-spin p-2 rounded-full border-4 border-white">
          </div>
          <Image src="/images/FB_IMG_1779445211008.jpg" className=" animate-none w-30 rounded-full" alt="logo" width={70} height={70}/>
        </div>

    </div>
  )
}

export default Splash