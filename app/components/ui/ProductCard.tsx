import Image, { StaticImageData } from 'next/image';
import React from 'react'

import { GiBuyCard } from 'react-icons/gi';
import Link from 'next/link';
import { Star, StarsIcon } from 'lucide-react';

interface ProductCardProps {
    image: StaticImageData;
    title: string;
    price: string;
    description: string;
    available: boolean;
    category: string;
    rate: string;
}
 

function ProductCard( {image, title, price,category, description, rate, available} : ProductCardProps ) {
    const message = `Hey! Abalawe online store. Is ${title} price: Mwk ${price} - available in store?`;
    const phoneNumber = "+265999597215";

  return (
    <div className=" flex transition-all active:scale-105 hover:scale-100 flex-col relative min-w-[300px] w-[100%]  contain-content">

        <div className="_image relative top-0 left-0 z-0 h-[30vh] rounded-2xl contain-content w-full">
            <p className=" bg-white absolute right-3 top-2 text-black p-3 md:px-4 md:p-2 text-sm rounded-3xl shadow-2xl z-50">{category}</p>
            <Image className=" w-full h-full object-cover transition-all hover:scale-105 " src={image} width={320} height={500}  alt={title}/>
        </div>

        <div className="details text-black p-0 top-0 left-0 flex flex-col justify-end items-start h-full select-text">
          
            <h1 className=" text-2xl font-bold tracking-wide flex items-center gap-2 px-2 mt-2">{title}</h1>
            <div className="row flex justify-between items-center w-full my-3 px-2">

                <p className=" text-sm  tracking-wide items-center flex gap-2"> <Star className=" text-yellow-500"/> ({rate} Reviews) </p>
                <span className=" font-bold">MWK {price}  </span>

            </div>
            
            <div className=" w-full flex justify-end items-center">
                <button disabled={!available} className=" w-[100%] p-1 bg-black disabled:bg-amber-100 rounded-3xl contain-content"><Link href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} className="  text-sm text-white border-2 border-gray-900/0  font-bold capitalize  p-3 w-[100%] text-center flex items-center justify-center  gap-4">Buy Now  </Link></button>
            </div>

        </div>

    </div>
  )
}

export default ProductCard