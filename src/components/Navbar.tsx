import React from 'react'
import Image from 'next/image';
import Logo from '@/app/assets/Logo.png'


function Navbar() {
  return (
    <div className="w-[1920px]  h-[92px] py-4 px-[220px] bg-[#043873] flex flex-row justify-between items-center ">
            <div className="w-[191px] h-[34px]">
             <Image src={Logo} alt='logo' />  
            </div>
            <div className="w-[737.5px] h-[60px] flex justify-between items-center gap-60" >
                <div className="w-[548px] h-[23px]">
                <ul className="flex flex-row justify-between text-white text-lg">
                        <li>Products</li>
                        <li>Solution</li>
                        <li>Resources</li>
                        <li>Contact</li>
                    </ul>
                </div>

                 <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg bg-[#FFE492;]">
                            login
                    </button>
                 </div>   
                       
            </div>
    </div>
  )
}

export default Navbar