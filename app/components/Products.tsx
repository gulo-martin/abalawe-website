import React from 'react'
import ProductCard from './ui/ProductCard'
import { PiArrowsMergeLight } from 'react-icons/pi';

import Link from 'next/link';

import { ProductsList } from "@/app/data/products";

function Products() {
  return (
    <div className=" bg-white w-full min-h-screen flex justify-start py-10 items-center flex-col">
        
        <div className=" 2all grid grid-cols-1 flex-col h-full w-[100%]  mx-auto md:max-w-7xl ">
            <h1 className=" mt-10 text-4xl font-bold uppercase border-green-500 pl-2 border-l-4">Products</h1>
        
            <div className="list  flex flex-col md:flex-row grid-cols-1 mt-10 gap-10 w-full md:gap-3 md:grid-cols-4 relative px-3">

              {ProductsList.map((item,index) => (
                 <ProductCard key={index} image={item.image} available={item.available} title={item.name} price={item.price} description={item.description}/> 

              )).slice(0,4)}

            </div>

            <div className=" p-4 w-full text-gray-500 mt-5 flex items-center gap-3">
              
              <Link href={'#contact'} className=" flex gap-2 items-center"><PiArrowsMergeLight/>see all products </Link>
            </div>
        </div>

    </div>
  )
}

export default Products