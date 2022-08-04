import React from 'react';
import logo from '../assets/Tide logo 2.png';
export const Navbar = () => {
  return (
    <section className='container pt-[30px] pb-[20px] mx-auto'>
      <div className='flex flex-row justify-between'>
        <div>
        <img src={logo} className='w-[80px]' alt="" />
        </div>
        <div>
        <a href="/" className='bg-yellow  px-[1.3rem] py-[0.9rem]'>Create an account</a>
        </div>

      </div>

    </section>
    )
}
