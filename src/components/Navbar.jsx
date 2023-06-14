import React from 'react';
import logo from '../assets/Logo_white.svg';
import {FaBars} from 'react-icons/fa';
export const Navbar = () => {
  return (
    <section className='relative z-[999] container pt-[30px] pb-[20px] mx-auto'>
      <div className='flex flex-row justify-between'>
        <div>
        <img src={logo} className='w-[80px]' alt="" />
        </div>
{ /* <div className='hidden md:block'>
        <a href="/" className='bg-yellow  px-[1.3rem] py-[0.9rem]'>Create an account</a>
        </div> */ }
        <div className='cursor-pointer md:hidden'>
          <FaBars />
        </div>

      </div>

    </section>
    )
}
