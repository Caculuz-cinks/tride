import React from 'react';
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import bg from '../assets/Hero_circle.svg'

export const Hero = () => {
  return (
    <>
    <section className='relative'>
      <div className='absolute right-0 top-[0px]'>
        <img src={bg} alt="" />
      </div>

    </section>
    <section className='container mb:[4rem] font-semibold font-[400] py-[2rem] md:py-[2rem] mx-auto mt-[20px]'>
      <div className='flex flex-row gap-x-[100px]'>
        <div className='max-w-[500px]'>
        <h1 className='text-white text-[40px]  md:text-[60px] text-left'>
        Banking solution 
         for <span className='text-yellow'>churches</span>
        </h1>
        <p className=' font-regular font-[400] text-neutral'>
        Collect offerings, tithes, seeds and project donations with 
        <span className='text-yellow'>
       seperate account numbers, inside one main account
        </span>  and disburse
         money from each project, 
        making it possible to manage all your organization finances from one place.
        </p>
        </div>

        <div>
          <div className='relative hidden lg:flex flex-col'>
            <div className=''>
            <img src={hero1} className="w-[100%]" alt="" />
            </div>
            <div className='absolute bottom-[1rem] right-[0.3rem]'>
            <img className=''  src={hero2} alt="" />
            </div>
            
          </div>
        </div>

        
      </div>

    </section>
    </>

  )
}
