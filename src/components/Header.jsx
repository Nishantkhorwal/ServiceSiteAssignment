import React,{useEffect,useState} from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { initFlowbite } from "flowbite";
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css'

function Header({userInfo}) {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
    useEffect(() => {
        initFlowbite();
      })
      const [fix, setFix] =  useState(false)
    function setFixed() {
    if (window.scrollY >= 150) {
    setFix(true)
    } else {
    setFix(false)
    }
  }
    window.addEventListener("scroll", setFixed)
  return (
    <div className='overflow-x-hidden w-full'>
    <div className='lg:w-full md:full w-fit h-screen relative bg-gradient-to-tr  from-gray-700 overflow-hidden'>
       <div className=' flex lg:justify-between justify-center w-[100%] lg:w-full lg:ps-20 lg:py-3 py-3  ps-0 pe-0 lg:pe-44 bg-gradient-to-l  from-blue-700 to-green-400 mb-10 relative z-10s' data-aos="fade-down" >
        <div className='flex flex-row w-1/2'>
            <div className='flex flex-row  w-1/3 justify-center items-center'><Link className='me-2 cursor-pointer' to='/'><BsFillTelephoneFill className='lg:me-3  me-0 text-white' /></Link> <p className='text-white md:text-xs font-semibold text-sm hidden md:block lg:block md:me-4 lg:me-0'>{userInfo?.phoneNumber}</p></div>
            <div className='flex flex-row  w-1/2 justify-start items-center'><Link to='/' className='cursor-pointer'><IoMailOpenOutline className='me-3 text-white md:me-2' /></Link> <p className= ' hidden lg:block text-white font-semibold text-sm md:block '>{userInfo?.contactEmail
}</p></div>
        </div>
        <div className='flex '>
          <div className='rounded-full mx-2  lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><FaInstagram /></Link></div>
          <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><FaTwitter /></Link></div>
          <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><IoLogoWhatsapp /></Link></div>
          <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><FaFacebookF /></Link></div>
        </div>
       
     </div>
     <img src='bgHome.jpg' className='w-full lg:w-full h-full  object-cover absolute lg:top-14 top-10 mix-blend-darken overflow-x-hidden' ></img>
     <nav className={`bg-white dark:bg-gray-900 ${fix ? 'fixed top-0 lg:w-full lg:ms-0 duration-100 ease-in  w-full  ' : 'relative  lg:ms-28 rounded-xl lg:w-4/5 '}       z-20  border-b border-gray-200 dark:border-gray-600`} data-aos="zoom-out">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to=" " className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={userInfo?.avatar.url} className="h-20 w-20 rounded-full" alt=" "/>
  </Link>
  <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:block">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
  <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="#" className="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 lg:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                    <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>

  </div>
  </div>
</nav>
<div className='flex flex-col relative w-[55%] top-10 lg:left-28 left-10 lg:pe-10 ' data-aos="fade-up">
    <h3 className=' text-5xl mb-4 lg:text-5xl  font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold' data-aos="fade-down">
      {userInfo?.title}
    </h3>
    <h1 className='mb-10 lg:text-7xl text-2xl font-extrabold text-white font-signika'>
      Better Design For Your Digital Products
    </h1>
    <p className='mb-8 md:text-lg lg:pe-44 text-sm lg:text-lg font-semibold text-white'>
    {userInfo?.description}</p>
                                 
    <button type="button" className="text-white w-44  font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 bg-gradient-to-l  from-blue-700 to-green-400 ">Get Started</button>
    </div>  
    </div>
    </div>
  )
}

export default Header