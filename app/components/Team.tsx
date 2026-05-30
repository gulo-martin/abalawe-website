import React from 'react'

import TeamProfile from './ui/TeamProfile';

import "../globals.css"
import { MyTeam } from '../data/MyTeam';

function Team() {
  return (
    <div className="bg-[#033C20]/0  w-full  flex justify-center items-center flex-col relative">
        {/* <div className=" w-full h-10 rounded-full absolute -top-20 -left-20 bg-[#033C20]"></div> */}

        <div className="main z-20 mt-10 py-10 mb-10 max-w-7xl w-[90%] mx-auto flex flex-col justify-center items-center ">
            
            <h1 className=" text-4xl md:text-8xl font-bold text-black">Meet Our <span className=" text-[#033C20]">Team</span></h1>
            <p className=" text-sm md:text-md mt-4">Our team is dedicated to bringing you the best products, service, and support. Each member brings real expertise and a passion for making your online shopping experience smooth and enjoyable.</p>
            
            <div className="team w-full mt-10">
              <div className="team-slider relative overflow-hidden">
                <div className="team-slider-track flex flex-row gap-3 overflow-x-scroll">
                  {[...MyTeam].map((item, id) => (
                    <TeamProfile
                      key={`${item.name}-${id}`}
                      image={item.image}
                      name={item.name}
                      location={item.location}
                      position={item.position}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Team