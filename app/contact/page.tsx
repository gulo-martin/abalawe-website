import React from 'react'
import Image from 'next/image';
import Picture from "../../public/images/team/f41a27ce19b6cb91f3c2cf814c84845d.png"
import Contact from '../components/Contact';

function page() {
  return (
   <div className=" flex flex-col">
       
        <div className="contact-frame">
          <Contact/>
        </div>
        
    </div>
  )
}

export default page