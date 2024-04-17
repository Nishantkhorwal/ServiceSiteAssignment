import React,{useRef,useState} from 'react'
import { useEffect } from "react";
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaStar } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial({testimonials}) {
  const [counteron, setCounterOn] = useState(false);
  const sliderRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
        setActiveDotIndex(currentSlide);
      }
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed
    cssEase: 'linear',
    pauseOnHover: true,
    lazyLoad: true,
    appendDots: (dots) => (
      <CustomDots dots={dots} onClick={(index) => handleDotClick(index)} activeIndex={activeDotIndex} />
    ),
  };

  const handleDotClick = (index) => {
    setActiveDotIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  // Custom appendDots function to customize dot appearance
  const CustomDots = ({ dots, onClick, activeIndex }) => (
    <div style={{ position: 'absolute', bottom: '-70px',left : '-50px', width: '100%' }}>
      <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>
        {dots.map((dot, index) => (
          <li
            key={index}
            style={{
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
              listStyle: 'none',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: activeIndex === index ? 'cyan' : 'gray',
            }}
            onClick={() => onClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
    <div className='lg:flex lg:flex-row flex-col py-20 overflow-x-hidden'>
      <div className='lg:w-[50%] w-full lg:ms-20 -ms-10 '>
      <div className='ms-20 mb-10'>
        <h1 className='text-5xl  font-bold mb-5 font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block' data-aos="fade-down">Testimonials</h1>
        <h1 className='lg:text-5xl text-3xl font-bold font-signika' data-aos="fade-down">What Our Customer<br/> <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold' data-aos="fade-up">says about us</strong></h1>
      </div>
      <div className=' lg:ms-24 ms-3 '>
        <div className='border lg:w-[60%] md:w-[500px] md:ms-36 pt-8 pb-5 rounded-full px-8  border-cyan-600 ms-10 lg:ms-0 '>
          <div className='w-[100%] mb-3   rounded-full overflow-hidden' data-aos="fade-up">
            <img src='work7.png' className='lg:w-[500px] md:w-[500px] w-[600px] rounded-full'></img>


          </div>
         

        </div>
        <img src='shape-43.svg ' className=' relative top-[-240px] left-72 lg:block hidden'></img>

      </div>
      </div>
      <div className='lg:w-[50%] w-full py-24 ' data-aos="fade-down">
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((d) => (
        <div className='flex flex-col ms-5 md:ms-14 lg:ms-0' key={d._id}>
        <div className='flex'>
      <div className='border lg:w-[10%] w-[30%] pt-3 pb-1 rounded-full px-3  border-cyan-600 me-5'>
          <div className='w-[100%] mb-2  rounded-full overflow-hidden'>
            <img src={d?.image?.url} className='w-[200px] rounded-full'></img>


          </div>
          </div>
          <div className='flex flex-col '>
            <h2 className='font-bold text-xl mt-3'>{d.name}</h2>
            <h2 className='font-semibold text-xl'>{d.position}</h2>

          </div>
          </div>
          <div className='flex mt-6'>
            <h1 className='font-bold text-xl me-6'>{d.name}r</h1>
            <div className='shadow-md flex rounded-lg p-2'> <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/></div>

          </div>
          <p className='text-slate-400 text-xl font-semibold mt-6 w-[80%]'>
           {d.review} </p>
                                   
          </div>
        ))}
        </Slider>


         

        

      </div>
    </div>
    </>
  )
}

export default Testimonial