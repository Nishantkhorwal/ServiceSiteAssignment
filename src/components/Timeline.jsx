import React,{useEffect} from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Timeline({experience}) {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
  return (
    <>
      <div className='w-full  text-center py-20 bg-slate-100'>
        <h1 className='text-xl md:text-5xl mb-10 lg:text-7xl  font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold ' data-aos="fade-down">My Experience </h1>
        <div className='flex flex-col md:flex-row md:w-[75%] lg:w-full lg:flex-row flex-wrap md:ps-28 md:ms-10 lg:ms-0 lg:ps-28 '>
          {experience?.map((experience)=>(
          <div className='flex flex-col bg-yellow-100 rounded-xl w-full lg:w-[28%] justify-start items-start border-[2px] me-10 px-4 py-8 border-cyan-600 shadow-xl mb-6 lg:mb-0' key={experience._id} data-aos="fade-right">
            <h1 className='font-signika text-4xl ms-8  mb-4'>{experience?.jobTitle}</h1>
           <div className='flex ms-5 mb-4 text-cyan-500'><h3 className='text-sm font-semibold me-8'>At {experience?.company_name}</h3><FaLocationDot className='me-2'/><h3 className='text-sm font-semibold'>{experience?.jobLocation}</h3></div>
           
           <ul className='mb-4 text-start'>
           {experience?.bulletPoints.map((d, index)=>(
             <li key={index} className='mb-2 text-start font-semibold font-signika '  ><div className='flex justify-center items-center'>{d ? <GoArrowRight className='me-3 font-bold text-3xl'/> : ''} <p>{d}</p></div></li>
            ))}
           </ul>
           <h3 className='text-start font-bold ms-4 mb-2'>Summary</h3>
           <p className='text-start font-semibold ms-4'>{experience?.summary}</p>
           
      
          </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Timeline