import React from 'react'

function Hero_Section() {
  return (
    <div className="w-[1920px]  py-[140px] px-[220px] bg-[#043873] flex flex-row ">
            <div className="w-[656px] h-[361px]">
                <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em]  mb-[24px] text-white">
                Get More Done with whitepace
                </h2>
                <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]  mb-[60px] text-white">
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>
                <button className="h-[63px] w-[219px] p-[20px] rounded-lg font-normal text-lg leading-[23px] tracking-[-0.02em] bg-[#4F9CF9] text-white">
                        Try Whitepace free →
                </button>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD] mt-[-65px]">

            </div>

    </div>
  )
}

export default Hero_Section