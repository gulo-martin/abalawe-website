import React from 'react'
import Team from '../components/Team';
import Image from 'next/image';
import Picture from "../../public/images/team/f41a27ce19b6cb91f3c2cf814c84845d.png"
import { ProductsList } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { FcElectronics } from 'react-icons/fc';
import { GiSonicShoes } from 'react-icons/gi';
import { DiMaterializecss } from 'react-icons/di';

function page() {
  return (
   <div className=" flex flex-col">
        <div className="top h-60 w-full">
          <Image src={Picture} className=" w-full h-full object-cover" alt="image"/>
        </div>
        
        <div className="below flex-1 py-10">
          <div className=" w-[90%] mx-auto flex gap-2 items-center select-auto"> 
              
              <div className="box shadow p-2 flex flex-row gap-2 items-center">Electronics <FcElectronics size={20}/></div>
              <div className="box shadow p-2 flex flex-row gap-2 items-center">shoes <GiSonicShoes size={20}/></div>
              <div className="box shadow p-2 flex flex-row gap-2 items-center">Home materials <DiMaterializecss size={20}/></div>

          </div>

          <div className="list grid grid-cols-1 mt-10 gap-10 w-[90%] mx-auto md:gap-3 md:grid-cols-4 relative px-0">

              {ProductsList.map((item,index) => (
                 <ProductCard key={index} image={item.image} available={item.available} title={item.name} price={item.price} description={item.description}/> 

              ))}

            </div>
        </div>
    </div>
  )
}

export default page