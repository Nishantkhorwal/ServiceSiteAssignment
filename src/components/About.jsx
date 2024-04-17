import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { initFlowbite } from "flowbite";
import AOS from 'aos'
import { SiCoinmarketcap } from "react-icons/si";
import { MdLocalFireDepartment } from "react-icons/md";
import 'aos/dist/aos.css'
import '../App.css'

function About({about}) {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
    useEffect(() => {
        initFlowbite();
      })
  return (
    <>
     <div className='flex lg:flex-row flex-col justify-center items-center lg:px-20 py-20'>
        <div className='w-1/2 lg:flex lg:flex-row hidden '>
            <div className='lg:w-[350px] w-[350px] rounded-t-full  overflow-hidden bg-green-200 lg:me-10 me-10' data-aos="fade-right">
           <div className='mx-8 shadow-2xl relative left-[-20px] lg:left-4 rounded-t-full w-[100px] lg:w-[300px] overflow-hidden'>
             <img src='work1.jpg' ></img>
           </div> 
           </div>
           <div className='w-[350px]  rounded-b-full   overflow-hidden bg-green-200' data-aos="fade-left">
           <div>
             <img src='work2.jpg' className='mx-8 shadow-2xl relative lg:left-[-50px] left-[-40px] rounded-b-full w-[300px] overflow-hidden'></img>
           </div>
           </div>
        </div>
        <div className='lg:w-1/2 w-full  relative px-4 lg:ps-0 overflow-hidden'>
            <div className='lg:ms-20 '>
            <h3 className='text-xl mb-4 lg:text-3xl md:text-3xl font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold ' data-aos="fade-down">
                About Us
            </h3>
            <h1 className='lg:text-5xl text-3xl font-bold lg:pe-36 mb-10 font-cabin' data-aos="fade-down">
               {about?.title} <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold'>{about?.subTitle} </strong>
            </h1>
            <p className='lg:text-lg md:text-lg text-sm' data-aos="fade-up" >
            {about.description}
            </p>
            <div className='flex  flex-col lg:flex-row mt-10' data-aos="fade-down">
                <div className='flex shadow-lg hover:shadow-xl py-4 px-3 lg:me-10 justify-center items-center mb-3'>
                 <SiCoinmarketcap className='text-7xl me-4  text-purple-800' />
                 <h1 className='font-semibold text-xl font-cabin'> App Development</h1>
                </div>
                <div className='flex shadow-lg hover:shadow-xl py-4 px-3 lg:me-10 mb-3 justify-center items-center' data-aos="fade-up">
                <MdLocalFireDepartment className='text-7xl lg:me-4 me-2 text-purple-800 ' />
                <h1  className='font-semibold text-xl font-cabin'> UX/UI Design & App Design</h1>

                </div>

            </div>
             <div className='lg:flex flex-col lg:flex-row mt-10 mb-8 '>
                <div className='flex shadow-lg hover:shadow-xl py-4 lg:px-3 lg:me-10 justify-center items-center mb-3'>
                 <SiCoinmarketcap className='text-7xl me-4 text-purple-800' />
                 <h1 className='font-semibold text-xl font-cabin'> Web Development</h1>
                </div>
                <div className='flex shadow-lg hover:shadow-xl py-4 px-3 lg:me-10 mb-3 justify-center items-center' >
                <MdLocalFireDepartment className='text-7xl me-4  text-purple-800' />
                <h1  className='font-semibold text-xl font-cabin'> Brand Consultant</h1> 

                </div>

            </div>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-aos="fade-down">Read More</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default About