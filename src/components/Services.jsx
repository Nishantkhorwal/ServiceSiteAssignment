import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Services({services}) {
  return (
    <>
      <div className='w-[95%] lg:w-full overflow-hidden py-20 '>
      <div className='lg:ms-20 ms-10'>
      <h3 className='text-xl md:text-3xl mb-4 lg:text-3xl  font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold' data-aos="fade-down">Our Services</h3>
      <h1 className='lg:text-5xl md:text-5xl text-xl font-bold font-signika' data-aos="fade-down">We Empower Clients<br/> <strong className='lg:text-5xl text-3xl  bg-gradient-to-l md:text-5xl  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold' data-aos="fade-down">Be Loved </strong></h1>
      </div>
      <div className='flex flex-col lg:py-10 md:px-20 lg:mt-10 mt-6' >
      {services.map((services) => (
        <div className='flex lg:flex-row flex-col  lg:ps-24 mb-16 mt-10' data-aos="fade-up" key={services._id}>
           <img src={services?.image?.url} alt='' className='lg:me-10 ms-10 lg:ms-0 md:w-[400px] lg:w-[200px] w-[200px]'></img>
          <div className='flex flex-col ms-10 lg:ms-0'>
            <h1 className='lg:text-4xl text-lg font-bold mb-6 font-signika'>
              {services?.name}
            </h1>
            <h1 className='lg:text-5xl text-lg  text-slate-300 font-bold font-signika'>
              {services?.charge}
            </h1>
          </div>
          <div className='flex flex-col w-[40%] ms-10 lg:ms-48 ' data-aos="fade-up">
            <p className='mb-6'>{services?.desc}</p>
            <div className='flex '>
            <button type="button" className="text-white lg:w-32 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Creative</button>
            <button type="button" className="text-white lg:w-36 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center me-2 mb-2">Accessibility</button>
            </div>
          </div>
          < FaArrowRightLong className=' cursor-pointer ms-6 lg:ms-5 text-3xl lg:text-7xl -rotate-45 hover:rotate-0 transition-all duration-500 hover:text-cyan-400 hidden lg:block' />
          <hr className='absolute top-60 left-[-100px] bg-gradient-to-br from-green-400 to-blue-600 w-full lg:w-[90%] lg:mx-36  h-[2px] mb-16 hidden lg:block'></hr>

        </div>
         ))}
        
     
        </div>
        </div>
    </>
  )
}

export default Services