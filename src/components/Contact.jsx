import React,{useEffect} from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Contact({userInfo}) {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
  useEffect(() => {
    initFlowbite();
  })
  return (
    <>
     <div className='lg:w-full w-full bg-slate-200 py-32 overflow-x-hidden'>
      <div className='flex lg:flex-row flex-col justify-center items-center'>
        <div className='lg:w-[50%] w-full flex justify-center me-4 lg:me-0'>
        <div className='py-10 px-14 bg-white rounded-lg lg:w-[70%] w-[90%] mb-6 lg:mb-0 md:mb-20' data-aos="fade-right">
        <div className='flex flex-col  shadow-sm  '>
          <div className='flex mb-5'> <input type="text" id="first_name" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-4" placeholder="FirstName" required  /> 
          <input type="text" id="last_name" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required /> </div>

          <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" placeholder="Email" required />

          <textarea id="message" rows="4" className="block px-8 py-3 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none mb-5" placeholder="Write your thoughts here..."></textarea>
          <button type="button" className="text-white   font-medium  text-sm  px-7 py-4 text-center me-2 mb-2 bg-gradient-to-l  from-blue-700 to-green-400 rounded-md ">Contact Us</button>


        </div>
        </div>
        </div>
        <div className='flex flex-col  lg:w-[50%] w-[90%] justify-center' data-aos="fade-left">
          <h3 className='text-5xl font-bold mb-4 font-signika bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block'>{userInfo?.quote}</h3>
          <div className='flex justify-start items-center mb-4'><img src={userInfo?.avatar?.url} alt='' className='rounded-full h-28 w-28 me-4'></img> <h1 className='text-3xl text-cyan-500 font-bold '>{userInfo.title}</h1></div>
          <p className='text-lg lg:pe-44 mb-8 font-signika'>{userInfo?.description}</p>
          <div className='flex justify-start items-center font-signika'><div className=' hover:bg-cyan-600 cursor-pointer px-3 py-3 rounded-full text-black bg-white me-6'><BsFillTelephoneFill className=''/></div> <h1 className='text-xl font-semibold'>Helpline:<br/>{userInfo?.phoneNumber}</h1></div>


        </div>

      </div>

    </div>
    </>
  )
}

export default Contact