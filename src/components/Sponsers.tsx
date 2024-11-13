import React from 'react'
import Image from 'next/image'
import Apple from  '@/app/assets/Apple.png'
import Microsoft from  '@/app/assets/Microsoft.png'
import Slack from  '@/app/assets/Slack_Technologies_Logo 1.png'
import Google from  '@/app/assets/google.png'


function Sponsers() {
  return (
    <div className="w-[1920px] py-[140px] px-[220px] bg-white">
          <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] text-center mb-[100px] text-black">
          Our sponsors
          </h2>
          <div className="w-[1482px] h-[71px] flex justify-between ">
            <Image src={Apple}  alt="Apple"/>
            <Image src={Microsoft}  alt="Microsoft"/>
            <Image src={Slack}  alt="Slack"/>
            <Image src={Google}  alt="Google"/>

         </div>
    </div>
  )
}

export default Sponsers