import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import section1 from '../assets/Section_1_asset.svg';
import section2 from '../assets/Section_2_asset.svg';
import section3 from '../assets/Section_3_asset.svg';
import section4 from '../assets/Section_4_asset.svg';

export const Whatweoffer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className='md:pt-[5rem] container font-semibold font-[400] mx-auto'>
      <h1 className='text-center text-[24px] md:text-[40px]'>What we offer</h1>

      <div data-aos-delay="500" className='mt-[4rem] md:mt-[7rem] flex flex-col md:flex-row  justify-between'>
        <div data-aos="fade-right" className='max-w-[600px] flex flex-col gap-y-[1rem] '>
          <h1 className='text-[24px] md:text-[40px]'>
           Dedicated account numbers for offerings, donations and other projects
          </h1>
          <p className='text-[14px] md:text-[17px] font-regular text-neutral max-w-[500px]'>No need to go to the bank to open an account just for one programme
            or project, create as many bank accounts as you need in one click.</p>

          <div className='mt-[1rem] hidden md:block'>
            <a href="/" className='font-regular hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
          </div>
        </div>

        <div data-aos="fade-left" className='mt-[1.5rem] md:mt-0   w-full'>
          <img src={section1} alt="" />
          <div className='mt-[2rem] md:hidden'>
          <a href="/" className='font-regular block text-center hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
        </div>
      </div>
        </div>

       

      {/* Section 2 */}


{/* <div data-aos-delay="500"  className='mt-[4rem] md:mt-[15rem] flex flex-col md:flex-row gap-x-[1rem] justify-between'>
        <div data-aos="fade-right" className=' w-full order-last md:order-first mt-[1.5rem] md:mt-0  '>
          <img src={section2} alt="" />
          <div className='mt-[2rem] md:hidden'>
            <a href="/" className='font-regular block text-center hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
          </div>
        </div>

        <div data-aos="fade-left" className=' max-w-[600px] flex flex-col gap-y-[1rem] '>
          <h1 className='text-[24px] md:text-[40px]'>
            Record transactions for every mode of payment for a project in one place; <span className='text-yellow'>
              bank transfers and cards</span>
          </h1>
          <p className='text-[14px] md:text-[17px] font-regular text-neutral max-w-[500px]'>Memebers or partners can pay for specific purposes online with their cards, directly into your dedicated account,
            and all transactions are recorded and calculated together.</p>

          <div className='mt-[1rem] hidden md:block'>
            <a href="/" className='font-regular hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
          </div>
        </div>

      </div> */}

      {/* Section 3 */}


      <div data-aos-delay="500"  className='mt-[4rem] md:mt-[15rem] flex flex-col md:flex-row gap-x-[1rem]  justify-between'>
        <div data-aos="fade-right" className='max-w-[600px] flex flex-col gap-y-[1rem] '>
          <h1 className='text-[24px] md:text-[40px]'>
            Spend only the amount donated for a project
          </h1>
          <p className='text-[14px] md:text-[17px] font-regular text-neutral max-w-[500px]'>When it is time to make use of funds, send money to anyone from each project account, you’ll only spend the exact amount donated for each project no more confusion on transfer descriptions.</p>

          <div className='mt-[1rem] hidden md:block'>
            <a href="/" className='font-regular hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
          </div>
        </div>

        <div data-aos="fade-left" className=' mt-[1.5rem] md:mt-0  '>
          <img src={section3} alt="" />
          <div className='mt-[2rem] md:hidden'>
          <a href="/" className=' font-regular block text-center hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
        </div>
        </div>

      
      </div>


      {/* Section 4 */}


      <div data-aos-delay="500"  className='mt-[4rem] md:mt-[15rem] flex flex-col md:flex-row  justify-between'>
        <div data-aos="fade-right" className=' w-full order-last md:order-first mt-[1.5rem] md:mt-0  '>
          <img src={section4} alt="" />
          <div className='mt-[2rem] md:hidden'>
            <a href="/" className=' font-regular block text-center hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
          </div>
        </div>

        <div data-aos="fade-left" className=' max-w-[600px] flex flex-col gap-y-[1rem] '>
          <h1 className='text-[24px] md:text-[40px]'>
            Assign signatories to your accounts digitally, and get money for projects approved faster.
          </h1>
          <p className='text-[14px] md:text-[17px] font-regular text-neutral max-w-[500px]'>Your administrators do not need to get physical signatories and wait for days to get money approved for projects, from the app, just send the request to use money and get it approved from the assigned signatories in minutes.</p>

          <div className='mt-[1rem] hidden md:block'>
            <a href="/" className=' font-regular hover:bg-yellow transition-all hover:text-white bg-transparent border-2 text-[15px] text-yellow border-solid border-yellow px-[4rem] py-[0.9rem]'>Get Started</a>
          </div>
        </div>
      </div>



      <div data-aos-delay="400" data-aos="fade-up" className='mt-[7rem] md:mt-[15rem]  text-center'>
        <h1 className='font-semibold text-[25px] md:text-[60px]'>Keep accurate record of your organization finances</h1>
        <p className='text-neutral font-regular text-[20px]'>Accountability, ease and speed while managing finances </p>
        <div className='mt-[2rem]'>
          <a href="/" className='font-regular hover:bg-yellow transition-all hover:text-white bg-yellow px-[2rem] py-[0.9rem]'>Get started today</a>
        </div>
      </div>


    </section>
  )
}
