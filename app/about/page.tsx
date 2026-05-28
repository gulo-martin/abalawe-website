import React from 'react'
import Team from '../components/Team';
import Image from 'next/image';
import Picture from "../../public/images/team/519e168ba47fdd8eaae3ea3ed34d11ed.png"

function page() {
  return (
    <div className=" flex flex-col">
        <div className="top h-60 w-full">
          <Image src={Picture} className=" w-full h-full object-cover" alt="image"/>
        </div>
        
        <div className="below flex-1 grid py-10 w-[90%] mx-auto">
            <h1 className=" text-2xl font-normal">Abalawe online store</h1>
            <p className=" mt-2 text-sm md:text-md">Abalawe brings you a curated selection of premium products designed to enhance everyday life. From stylish home essentials to thoughtful gifts, our store is built for quality and value.</p>
            <p className=" mt-3 text-sm md:text-md">Every item is carefully chosen to reflect modern taste, practical use, and lasting satisfaction. We focus on products that combine durability with a polished, approachable style.</p>
            <p className=" mt-3 text-sm md:text-md">Shop with confidence knowing our team is committed to fast delivery, attentive service, and a seamless online experience for every customer.</p>

        </div>
    </div>
  )
}

export default page