import React from 'react'
import Image from 'next/image';
import Logo from '@/app/assets/Logo.png'


function Footer() {
  return (
    <div className="w-[1920px]  py-[140px] px-[220px] bg-[#043873] flex flex-col">
        <div className="w-[1480px] h-[169px] gap-[100px] flex flex-row">
             <div className="w-[295px] h-[169px] ">
             <Image src={Logo} alt='logo' className='mb-[15px]'/>  
             <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] max-w-60 text-white">
             whitepace was created for the new ways we live and work. We make a better workspace around the world
             </p>
             </div>

             <div className="w-[295px] h-[127px]">
                      <p className="font-bold text-lg leading-[30px] tracking-[-0.02em] mb-[15px] text-white">Product</p>
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-[#FFE492]">Overview</p> 
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Pricing</p>
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Customer stories</p>
             </div>

             <div className="w-[295px] h-[127px]">
                      <p className="font-bold text-lg leading-[30px] tracking-[-0.02em] mb-[15px] text-white">Resources</p>
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Blog</p> 
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Guides & tutorials</p>
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Help center</p>
             </div>

             <div className="w-[295px] h-[127px]">
                      <p className="font-bold text-lg leading-[30px] tracking-[-0.02em] mb-[15px] text-white">Company</p>
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">About us</p> 
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Careers</p>
                      <p className="font-normal text-base leading-[30px] tracking-[-0.02em]  text-white">Media kit</p>
             </div>
        </div>
        <div className=" w-[1480px] border-2 border-[#2E4E73] mt-[80.7px]"> </div>
        <p className="font-normal text-base leading-[20px] tracking-[-0.02em] mt-[19.93px] text-center text-white">
        ©2021 Whitepace LLC.
        </p>
        
    </div>
  )
}

export default Footer