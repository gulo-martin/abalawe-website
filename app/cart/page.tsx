import React from 'react'
import { BiCart } from 'react-icons/bi';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

function page() {
  return (
   <div className=" flex bg-[#f6f6f6] flex-col w-full min-h-screen justify-start items-center">
       

        <div className="grid grid-cols-1 md:mt-10 py-10 md:grid-cols-3 w-[90%] max-w-7xl mx-auto h-full gap-4 md:gap-5 relative">
            {/* header */}
            <h1 className=" col-span-1 mt-12 md:mt-8 pb-2 text-xl md:text-3xl md:col-span-3 w-full border-b divide-gray-100">My cart</h1>

            {/* left */}
            <div className=" p-4 flex col-span-1 md:col-span-2 flex-col w-full rounded shadow bg-white">


               <div className="empty mt-5 bg-[#033C20]  p-5 py-10 gap-4 rounded-2xl w-full flex flex-col justify-center items-center">
                 <BiCart className=" text-5xl text-gray-300"/>
                 <p className=" w-full text-center text-gray-300 md:text-xl">No available products in the cart</p>
                 <Link href={'/products'} className="text-gray-300 flex gap-2 items-center">Order now <FaArrowRight size={10}/></Link>
               </div>

            </div>

            {/* right */}
            <div className="flex flex-col py-2 px-5 gap-3 justify-between bg-white col-span-1 md:col-span-1 w-full md:h-[60vh] rounded shadow">

              {/* top-section */}
              <div className="top w-full h-full flex flex-col gap-5 my-2 text-sm">

                  {/* promo code */}
                  <div className="section bg-[#f6f6f6] mt-3 flex justify-between items-center w-full rounded-3xl contain-content">
                    <input type="text" name="promo_code" className="w-full outline-0  p-4 px-3 text-md" placeholder="Promo Code" id="promo_code" />
                    <button className="bg-[#033C20] h-full active:bg-[#1d412f] hover:bg-[#05502c] text-white rounded-xl w-[30%]">Apply</button>
                  </div>

                  <div className="section mt-3 flex justify-between items-center w-full">
                    <h1>SubTotal</h1>
                    <p>MWK 00.00</p>
                  </div>

                  <div className="section mt-3 flex justify-between items-center w-full">
                    <h1>Shipping</h1>
                    <p>MWK 00.00</p>
                  </div>

                  <div className="section mt-3 flex justify-between items-center w-full">
                    <h1>BagTotal</h1>
                    <p>MWK 00.00</p>
                  </div>

              </div>

              {/* Bottom-section */}
              <div className="bottom flex-1 w-full mb-4">
                <button disabled className=" bg-[#033C20] active:bg-[#1d412f] hover:bg-[#05502c] text-white p-3 rounded-3xl shadow w-full">Order Now</button>
              </div>
            </div>

        </div>

         
    </div>
  )
}

export default page