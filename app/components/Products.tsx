import React from 'react'
import ProductCard from './ui/ProductCard'
import { PiArrowsMergeLight } from 'react-icons/pi';

import Link from 'next/link';

import { ProductsList } from "@/app/data/products";

function Products() {
  return (
    <div className="  w-[90%] mx-auto  min-h-screen flex justify-start py-10 items-start flex-col">
        
        <div className=" 2all  grid grid-cols-1 flex-col h-full w-full  mx-auto md:max-w-7xl ">
            <h1 className=" mt-10 text-4xl font-bold uppercase border-green-500 pl-2 border-l-4">Top Products</h1>
        
            <div className="list  grid grid-cols-1 mt-10 gap-y-10 gap-x-3 w-full md:gap-3 md:grid-cols-4 relative md:px-4">

              {ProductsList.map((item,index) => (
                 <ProductCard key={index} rate={item.rate} category={item.category} image={item.image} available={item.available} title={item.name} price={item.price} description={item.description}/> 

              )).slice(0,4)}

            </div>

            <div className=" p-4 w-full text-gray-500 mt-5 flex items-center gap-3">
              
              <Link href={'/products'} className=" flex gap-2 items-center"><PiArrowsMergeLight/>see all products </Link>
            </div>
        </div>

    </div>
  )
}

export default Products