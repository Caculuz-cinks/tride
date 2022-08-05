import React from 'react';
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import bg from '../assets/Hero_circle.svg';

export const Hero = () => {
  return (
    <>
      <section className='relative'>
        <div className='absolute z-[10] right-0 top-[0px]'>
          <img src={bg} alt="" />
        </div>

      </section>
      <section className='relative z-[999] container mb-[2rem] md:mb-[8rem] font-semibold font-[400] py-[2rem] md:py-[2rem] mx-auto mt-[20px]'>
        <div className='flex flex-col md:flex-row gap-x-[100px]'>
          <div className=''>
            <h1 className='text-white text-[40px] max-w-[500px]  md:text-[60px] text-left'>
              Banking solution
              for <span className='text-yellow'>churches</span>
            </h1>
            <p className=' md:max-w-[500px] font-regular font-[400] text-neutral'>
              Collect offerings, tithes, seeds and project donations with
              <span className='text-yellow'> seperate account numbers, inside one main account
              </span>  and disburse
              money from each project,
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

          <div>
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
