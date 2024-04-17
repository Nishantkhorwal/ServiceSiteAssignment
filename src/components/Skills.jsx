import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Skills({skills}) {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
  return (
    <>
    <div className=' text-center w-full py-20 bg-slate-200'>
      <h1 className='text-xl mb-4 lg:text-3xl  font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold' data-aos="fade-down">Software Developer</h1>
      <h1 className='lg:text-5xl text-xl font-bold font-signika mb-20' data-aos="fade-down"> My Skills </h1>
      <div className='flex flex-wrap justify-center'>
        {skills.map((d, index) => (
            <div key={index} className='flex lg:flex-row flex-col px-4 lg:w-[45%] w-full mb-4' data-aos="fade-down">
                <div className='border-[2px] border-cyan-600 flex flex-row w-full py-3 rounded-lg px-3 bg-yellow-200 shadow-md'>
                    <div className='me-4 rounded-full'>
                        <img src={d?.image?.url} alt={d.name} className='w-[100px] rounded-xl'></img>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='text-xl font-signika mb-2'>{d?.name}</h1>
                        <div className='flex flex-row items-center'>
                            <div className= ' w-[100px] md:w-[300px] lg:w-[300px] h-2 rounded-xl bg-slate-300 pe-2 me-4'>
                                <div className={`bg-red-500 h-2 rounded-xl`} style={{ width: `${d.percentage}%` }}></div>
                            </div>
                            <h1 className='text-xl font-signika'>{d.percentage}%</h1>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
     </div>
    </>
  )
}

export default Skills