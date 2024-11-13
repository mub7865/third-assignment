import React from 'react'

function Customize() {
    return (
        <div className="w-[1920px] py-[140px] px-[220px] bg-white gap-[98px] flex flex-row">
            <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
            <div className="w-[656px] h-[361px] mt-[92px]">
                <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-[24px] text-black">
                    Customise it to your needs
                </h2>
                <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-[60px] text-black">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.                </p>
                <button className="h-[63px] w-[219px] p-[20px] rounded-lg font-normal text-lg leading-[23px] tracking-[-0.02em] bg-[#4F9CF9] text-white">
                    Lets Go
                </button>
            </div>

        </div>
    )
}

export default Customize