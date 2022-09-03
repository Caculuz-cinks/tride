import React from 'react';
import logo from '../assets/Logo_white.svg';
import { footer } from '../data';
export const Footer = () => {
    const {company, resources, socials} = footer;
  return (
    <section className='container py-2 font-semibold font-[400] mt-[7rem] md:mt-[15rem] mx-auto'>
        <div className='flex flex-col md:flex-row md:gap-x-[100px]'>
        <div>
        <img src={logo} className='w-[80px]' alt="" />
        <p className='text-neutral font-regular mt-[1rem]'>Accountability, ease and speed.</p>
        <ul className='flex mt-[2rem] flex-row gap-x-[1rem]' >
            {socials.map((social, index) =>{
                return (
            <li key={index}>
            <a href={social.href}>
                <img src={social.name} alt="" />
            </a>
            </li>
                )
        })}
        </ul>

        </div>


        <div className='mt-[3rem] md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-x-[50px]'>
        <div>
            <h1 className='text-[1.2rem]'>Company</h1>
            <ul className='flex mt-[1rem] flex-col' >
            {company.map((item, index) =>{
                return (
            <li className=' mb-[1rem]' key={index}>
            <a href={item.href} className="font-regular text-neutral text-[18px]">
                {item.name}
            </a>
            </li>
                )
        })}
        </ul>
        </div>


        <div>
            <h1 className='text-[1.2rem]'>Resources</h1>
            <ul className='flex mt-[1rem] flex-col' >
            {resources.map((item, index) =>{
                return (
            <li className=' mb-[1rem]' key={index}>
            <a href={item.href} className="font-regular text-neutral text-[18px]">
                {item.name}
            </a>
            </li>
                )
        })}
        </ul>
        </div>
        </div>
</div>

    </section>
  )
}
