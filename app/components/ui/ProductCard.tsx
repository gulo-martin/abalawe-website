import Image, { StaticImageData } from 'next/image';
import React from 'react'

import { FaJediOrder } from 'react-icons/fa';
import { BugPlay, Check, CheckCircle } from 'lucide-react';
import { GiBuyCard } from 'react-icons/gi';
import { BsCheckCircleFill } from 'react-icons/bs';
import Link from 'next/link';

interface ProductCard {
    image: StaticImageData;
    title: string;
    price: string;
    description: string
}
 

function ProductCard( {image, title, price, description} : ProductCard ) {
  return (
    <div className=" flex flex-col relative h-[50vh] w-[350px] md:w-[300px] rounded-3xl contain-content">
        <div className="_image  top-0 left-0 z-0 h-full w-full">
            <Image className=" w-full h-full object-cover scale-110" src={image}  alt={title}/>
        </div>

        <div className="bg-linear-to-t from-black/70 absolute z-10 inset-0 top-0 left-0 h-full w-full"></div>

        <div className="details absolute z-20 text-white p-4 top-0 left-0 flex flex-col justify-end items-start w-full h-full select-none">
            <h1 className=" text-2xl font-bold flex items-center gap-2">{title} <BsCheckCircleFill/></h1>
            <p className=" text-sm mt-2 mb-4 tracking-wide"> <span className=" font-bold">MWK {price} </span> - {description}</p>
            <Link href={'#contact'} className=" backdrop-blur-xl text-sm text-black border-2 border-gray-900/0 bg-white font-bold uppercase rounded-3xl p-3 w-[70%] text-center flex items-center justify-center  gap-4">Order now <GiBuyCard className=" text-black"/></Link>
        </div>
    </div>
  )
}

export default ProductCard