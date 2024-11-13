import React from 'react'
import Image from 'next/image'
import Work_Together from '@/app/assets/Content.png'

function Work_management() {
    return (
        <div className="w-[1920px]  py-[140px] px-[220px] bg-white ">
            <div className="w-[1480px] h-[547px] flex flex-row gap-[2rem]">
                <div className="w-[672px] h-[411px] ">
                    <h1 className="font-bold text-[72px] leading-[87,14px] tracking-[-0.02em] mb-[24px] text-[#212529]">
                        Project Management
                    </h1>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-[60px] text-[#212529]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button className=" w-[201px] h-[63px]  p-[20px] rounded-lg font-normal text-lg leading-[23px] tracking-[-0.02em] bg-[#4F9CF9] text-white">
                        Try Whitepace free
                    </button>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD] mt-[-40px]">

                </div>
            </div>

            <div className="w-[1480px] h-[661px] flex flex-row mt-[100px] gap-[100px]">
                <div className="w-[710px] h-[661px] ">
                    <Image src={Work_Together}
                        alt="Work Together"
                        objectFit="cover"   // Cover to behave like CSS background-size: cover
                    />
                </div>

                <div className="w-[670px] h-[294px] my-[187px]">
                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-[24px] text-black">
                        Work Together
                    </h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-[60px] text-black">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                    <button className="h-[63px] w-[219px] p-[20px] rounded-lg font-normal text-lg leading-[23px] tracking-[-0.02em] bg-[#4F9CF9] text-white">
                        Try Whitepace free
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Work_management