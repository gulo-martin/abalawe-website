import React from 'react'

import Image from 'next/image';

function TeamProfile() {
  return (
    <div className=" contain-content  w-[100%]   bg-white scale-90 md:scale-95 hover:scale-90 transition-all delay-100 ease-in-out select-none   shadow-sm rounded-2xl  relative">
       <div className={" h-5 bg-green-200 w-full"}></div>
        <div className=" w-full justify-center items-center text-white  flex flex-col p-5">
           
            <div className="   bg-white border-4  w-40 h-40 rounded-full shadow flex justify-center items-center text-white font-bold contain-content">
                <Image src="/images/1bd62f60f9ce82763172b9dccf580dae.png" className=" w-full h-full object-cover" alt="image" width={180} height={120}/>
            </div>

            <h1 className="text-black font-bold mt-5 text-2xl">Favour Maneno</h1>
            <p className="text-gray-700 font-bold">Mzuzu, luwinga</p>
              <p className="text-gray-500 font-bold">CEO</p>
               <p className="text-gray-500 text-center w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         </div>

    </div>
  )
}

export default TeamProfile