import React from 'react'

import TestimonialCard from './ui/TestimonialCard'

const testimonialData = [
  {
    id: 1,
    name: 'Favour Maneno',
    role: 'Customer',
    message: 'Abalawe provided excellent service and fast delivery. The product quality exceeded my expectations — highly recommended!',
    image: '/images/team/1bd62f60f9ce82763172b9dccf580dae.png',
  },
  {
    id: 2,
    name: 'Samuel Mafunga',
    role: 'Verified Buyer',
    message: 'Shopping was easy and the support team answered all my questions quickly. The order arrived in perfect condition.',
    image: '/images/team/519e168ba47fdd8eaae3ea3ed34d11ed.png',
  },
  {
    id: 3,
    name: 'Cherby Chirwa',
    role: 'Returning Customer',
    message: 'Great product selection and prompt shipping. I will definitely shop with Abalawe again for gifts and essentials.',
    image: '/images/team/a2efa5914fb3113961429a6c55028cd9.png',
  },
]

function Testimonials() {
  return (
    <div className="bg-white w-full min-h-screen pb-40 md:pb-30 relative">
        
      <div className="main max-w-7xl w-[90%] mx-auto flex flex-col">
          <h1 className=" text-center text-md font-bold mt-20 text-red-500">Testimonials</h1>
          <p className=" w-[80%] mx-auto text-center text-4xl md:text-6xl font-bold  py-5 mt-0 mb-0">Take a Look at What Our Amazing Clients have said</p>

          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full mt-9 gap-50 md:gap-20">
              {testimonialData.map((item, index) => (
                <TestimonialCard
                  key={item.id}
                  index={index + 1}
                  name={item.name}
                  role={item.role}
                  message={item.message}
                  image={item.image}
                />
              ))}
          </div>

      </div>

    </div>
  )
}

export default Testimonials