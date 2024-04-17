import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects({projects}) {
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
      
    ],
    
  };
  return (
    <> 
    <div className='overflow-x-hidden'>
      <div className='lg:flex bg-slate-100  lg:flex-col w-full    lg:ms-0  py-10  '>
      <h3 className='font-semibold text-5xl mb-5 ms-4 lg:ms-20 font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block' data-aos="fade-down">Portfolio</h3>
      <h1 className='font-bold lg:text-7xl text-3xl mb-6 ms-4 lg:ms-20 font-signika' data-aos="fade-up">Featured <strong className='lg:text-7xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold'>Projects </strong></h1>
      <p className='lg:text-lg text-sm  text-slate-400 lg:w-[50%] w mb-14 ms-4 lg:ms-20' data-aos="fade-down">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,</p> 
      <div className=' w-full ms-2 lg:ms-20' data-aos="zoom-in">
      <Slider {...settings1}>
      {projects.map((d) => (
        <div className='flex md:me-4 lg:me-0 flex-col ' key={d._id}>
          <div className="image-container ">
          <img src={d?.image?.url} className='w-[500px] md:w-[200px] lg:w-[500px] rounded-lg rounded-bl-none' alt=''></img>
          <div className="hover-text">
            <h1 className='font-extrabold text-white font-signika '>{d?.title}</h1>
            <h1 className='font-extrabold text-white font-signika '>{d?.techStack}</h1>
            </div>
          </div>
        </div>
      ))}
      </Slider>

      </div>

    </div>
    </div>
    </>
  )
}

export default Projects