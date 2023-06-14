import React, {useEffect} from 'react';
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import bg from '../assets/Hero_circle.svg';
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  
  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
    <>
      <section className='relative'>
        <div className='absolute z-[10] right-0 top-[0px]'>
          <img src={bg} alt="" />
        </div>

      </section>
      <section className='relative z-[999] container mb-[2rem] md:mb-[8rem] font-medium font-[300] py-[2rem] md:py-[2rem] mx-auto mt-[20px]'>
        <div className='flex flex-col md:flex-row gap-x-[50px]'>
          <div data-aos="fade-right" className=''>
            <h1 className='text-white text-[25px] max-w-[500px]  md:text-[45px] text-left'>
              Get separate bank accounts for every project in your organization
            </h1>
            <p className=' md:max-w-[500px] font-regular font-[400] text-neutral'>
              Collect offerings, seeds and donations with separate account numbers, 
                inside one main account and disburse money from each project separately, 
                  making it possible to manage all your organization finances from one place.
            </p>
            <div className='flex flex-col items-center justify-between md:flex-row'>
              <div className='hidden md:block mt-[2rem]'>
                <a href="/" className=' bg-yellow font-regular px-[1.3rem] py-[0.9rem]'>Create an account</a>
              </div>
              <div className='md:hidden w-full block mt-[2rem]'>
                <a href="/" className=' text-center block w-full bg-yellow font-regular px-[1.3rem] py-[0.9rem]'>Create an account</a>
              </div>
              <div className='hidden md:block mt-[2rem]'>
                <a className="  text-yellow font-regular  px-[1.3rem] py-[0.9rem] underline" href="#">Book a meeting with our team</a>
              </div>
              <div className='md:hidden w-full block mt-[2rem]'>
                <a className="text-center text-yellow block font-regular  px-[1.3rem] py-[0.9rem] underline" href="#">Book a meeting with our team</a>
              </div>
            </div>

          </div>

          <div data-aos-delay="500" data-aos="fade-left">
            <div className='relative hidden lg:flex flex-col'>
              <div className=''>
                <img src={hero1} className="w-[100%]" alt="" />
              </div>
              <div className='absolute -bottom-[10rem] -right-[6rem]'>
                <img className='' src={hero2} alt="" />
              </div>

            </div>
          </div>


        </div>

      </section>
    </>

  )
}
