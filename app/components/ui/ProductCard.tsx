import Image, { StaticImageData } from 'next/image';
import React from 'react'

import { GiBuyCard } from 'react-icons/gi';
import { BsCheckCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { MdDangerous } from 'react-icons/md';

interface ProductCardProps {
    image: StaticImageData;
    title: string;
    price: string;
    description: string;
    available: boolean;
}
 

function ProductCard( {image, title, price, description, available} : ProductCardProps ) {
    const message = `Hey! Abalawe online store. Is ${title} price: Mwk ${price} - available in store?`;
    const phoneNumber = "+265999597215";

  return (
    <div className=" flex flex-col relative md:h-[50vh]  w-[100%] rounded-3xl contain-content">
        <div className="_image  top-0 left-0 z-0 h-[65vh]  w-full">
            <Image className=" w-full h-full object-cover scale-125" src={image} width={320} height={500}  alt={title}/>
        </div>

        <div className="bg-linear-to-t from-black/70 absolute z-10 inset-0 top-0 left-0 h-full w-full"></div>

        <div className="details absolute z-20 text-white p-4 top-0 left-0 flex flex-col justify-end items-start w-full h-full select-none">
           
          
            <h1 className=" text-2xl font-bold flex items-center gap-2">{title} <BsCheckCircleFill/></h1>
            <p className=" text-sm mt-2 mb-4 tracking-wide"> <span className=" font-bold">MWK {price} </span> - {description}</p>
            
            {available ? (
                <button disabled={!available} className=" w-full bg-white disabled:bg-amber-100 rounded-3xl contain-content"><Link href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} className="  text-sm text-black border-2 border-gray-900/0  font-bold uppercase  p-3 w-[100%] text-center flex items-center justify-center  gap-4">Order now <GiBuyCard className=" text-black"/></Link></button>

            ) : (
                <button disabled={!available} className=" w-full bg-white disabled:bg-red-400 text-white rounded-3xl contain-content"><p  className="  text-sm text-white border-2 border-gray-900/0  font-bold uppercase  p-3 w-[100%] text-center flex items-center justify-center  gap-2">Sold <MdDangerous className=" text-white text-xl"/></p></button>

            )}
        </div>
    </div>
  )
}

export default ProductCard