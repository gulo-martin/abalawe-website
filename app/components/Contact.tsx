import React from 'react'

import Image from 'next/image';
import { Send } from 'lucide-react';

function Contact() {
  return (
    <div className="bg-white w-full overflow-x-hidden min-h-screen relative">
        <div className=" w-50 h-50 rounded-full absolute -top-20 -right-20 bg-green-600 z-0"></div>

        
        <div className="main z-30 max-w-7xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3">

            <div className="left h-full w-full md:col-span-2">
                <Image src="/images/shahid-mehmood-0KgJaDiOS7c-unsplash.png" className=" w-full h-full object-cover" alt="constct image" width={1200} height={800}/>
            </div>

            <div className="right flex flex-col items-center justify-center">
                <div className="box bg-white border-2 border-gray-50 rounded p-4">
                    <h1 className=" text-4xl mb-2 font-bold">Stay in Touch</h1>
                    <p className=" text-sm mb-2">Have questions or need help? Send us a message and our team will respond within one business day.</p>
                    <form action="">
                        <input type="text" name="name" className=" p-3 border border-gray-300 outline-0 rounded mt-3 w-full" id="name" placeholder="abalaweOnlineStore" />
                        <input type="email" name="email" className=" p-3 border border-gray-300 outline-0 rounded mt-3 w-full" id="email" placeholder="info@abalaweOnlineStore.com" />
                        <input type="text" name="text" className=" p-3 border border-gray-300 outline-0 rounded mt-3 w-full" id="text" placeholder="Description" />
                        <button type="submit" name="name" className=" p-4 border outline-0 rounded mt-3 w-full bg-green-600 text-white" id="name"  >SEND </button>

                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact