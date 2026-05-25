
import Image from "next/image";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Link from "next/link";
import QrCode from "./components/QrCode";
import Products from "./components/Products";
import { GiBuyCard } from 'react-icons/gi';
import About from "./components/About";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start  bg-white font-sans relative">
       
        {/* home-page */}
        <div className="home-section relative contain-content flex justify-center items-center flex-col bg-black h-[90vh] w-full z-10">

          <div className="bg-image absolute top-0 left-0 z-0 w-full h-full">
            <Image src="/images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg" className=" w-full h-full object-cover" alt="background image" width={1920} height={1080}/>
          </div>

          <div className=" absolute left-0 top-0 w-full h-full inset-0 bg-linear-to-r from-black to-black/50"></div>

          <div className="details z-20 p-7 grid md:grid-cols-3 gap-4 mx-auto max-w-7xl flex-row text-white">

            <div className="home-image2  justify-start items-start">
              <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-[50%] rounded-full" alt="logo" width={500} height={500}/>
            </div>
            
            <div className="left col-span-2 flex justify-center items-start flex-col">
              <h1 className=" text-3xl md:text-7xl font-bold">Abalawe online store</h1>
              <p className=" mt-3 ">Welcome to Abalawe Online Store — your destination for quality products and dependable service. We carefully select items you'll love, offer competitive prices, and provide fast, reliable shipping.</p>

              <div className="nutton mt-5 ">
                <Link href="#contact" className=" bg-linear-to-r from-green-600 hover:from-green-700 to-green-700 p-3 px-20 cursor-pointer rounded-full flex items-center gap-3">Get in touch <GiBuyCard className=" text-2xl"/> </Link>
              </div>


            </div>

            <div className="home-image flex justify-center items-center">
              <Image src="/images/FB_IMG_1779445211008.jpg" className=" w-[80%] rounded-full" alt="logo" width={500} height={500}/>
            </div>

          </div>

        </div>

        <div id="products"> <Products/> </div>
        <QrCode/>
       
        {/* testimonials */}
        <Testimonials/>

        {/* <Team/> */}
        
        {/* contact */}
        <div id="contact" className="contact"> <Contact/>  </div>

        <About/>
    
    </div>
  );
}
