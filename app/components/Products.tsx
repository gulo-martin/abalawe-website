import React from 'react'
import ProductCard from './ui/ProductCard'
import { PiArrowsMergeLight } from 'react-icons/pi';

import ProductImage1 from "../../public/images/9ef8b49323e14bf089e669b60b389f77.jpg";
import ProductImage2 from "../../public/images/f443fa7b6f7b4310ae62c088a407c684.jpg";
import Link from 'next/link';


function Products() {
  return (
    <div className=" bg-white w-full min-h-screen flex justify-start py-10 items-center flex-col">
        
        <div className=" 2all grid grid-cols-1 flex-col h-full w-[100%]  mx-auto max-w-7xl ">
            <h1 className=" mt-10 text-4xl font-bold uppercase border-green-500 pl-2 border-l-4">Products</h1>
        
            <div className="list  flex flex-col md:flex-row grid-cols-1 mt-10 gap-10 w-full md:gap-3 md:grid-cols-4 relative">
                <ProductCard image={ProductImage1} title="Pixel 7" price={"1,950,000"} description="A Product Designer focused on intuitive user experience"/>
                <ProductCard image={ProductImage2} title="Iphone 13" price={"2,300,000"} description="A Product Designer focused on intuitive user experience"/>
                <ProductCard image={ProductImage1} title="Pixel 7" price={"1,950,000"} description="A Product Designer focused on intuitive user experience"/>
                <ProductCard image={ProductImage2} title="Iphone 13" price={"2,300,000"} description="A Product Designer focused on intuitive user experience"/>

            </div>

            <div className=" p-4 w-full text-gray-500 mt-5 flex items-center gap-3">
              
              <Link href={'#contact'} className=" flex gap-2 items-center"><PiArrowsMergeLight/>see all products </Link>
            </div>
        </div>

    </div>
  )
}

export default Products