import React from 'react'
import Image from 'next/image';
import Picture from "../../public/images/team/519e168ba47fdd8eaae3ea3ed34d11ed.png"

import Picture2 from "../../public/images/team/a2efa5914fb3113961429a6c55028cd9.png"
import { CheckCircle, CheckCircle2Icon } from 'lucide-react';


function testimonials() {
  return (
    <div className=" flex flex-col">
        <div className="top h-60 w-full">
          <Image src={Picture} className=" w-full h-full object-cover" alt="image"/>
        </div>
        
        <div className="below w-[90%] max-w-7xl mx-auto gap-10 flex-1 grid grid-cols-1 py-15">

            

            <div className="text  justify-center text-left items-center">
              <h1 className={ " text-5xl border-l-6 border-green-600 pl-2"}>Happy customers</h1>
              <p className=" mt-4 text-sm md:text-md">Our customers love the thoughtful selection and dependable service from Abalawe. We deliver quality products that make everyday life more enjoyable and easier to manage.</p>
            </div>

            <div className="video grid grid-cols-1 gap-5 md:grid-cols-3">

            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="video relative w-full h-[40vh] contain-content rounded-xl rounded-tl-none">
                <Image src={Picture2} className="w-full  z-0 " alt="image"/>
                <div className=" absolute z-10 top-0 left-0 bg-white  rounded-br-xl p-2">Mzuzu</div>
                <div className=" absolute z-10 bg-green-500 rounded-full bottom-3 right-3  p-2"><CheckCircle2Icon className=" text-white"/></div>
              </div>
            ))}
              

            </div>

        </div>
    </div>
  )
}

export default testimonials