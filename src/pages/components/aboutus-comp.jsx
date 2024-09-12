/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AboutusComp = () => {
  return (
    <div className="main h-[602px] bg-[#222222] flex ">
  <div className="left w-[50%] h-full pl-[130px] pt-[72px]">
    <h2 className="font-[500] text-[20px] text-[#DC323F] mb-[24px]">
      About us
    </h2>
    <h6 className="font-[500] text-[22px] text-[#FFF] mb-[24px] leading-[150%]">
      We're just a call away from turning your property into a
      flawless&nbsp;10&nbsp;out&nbsp;of&nbsp;10.
    </h6>
    <p className="text-[#858587] text-[16px] font-[400] leading-[28px]">
      By partnering with us, you've already taken a powerful step forward. We
      treat your property as our own, with a relentless commitment to scaling
      your business—guaranteed! Our dedicated team works around the clock, all
      year long, to continuously uncover new opportunities to elevate your
      success, season&nbsp;after&nbsp;season. By partnering with us, you've
      already taken a powerful step forward. We treat your property as our own,
      with a relentless commitment to scaling your business—guaranteed! Our
      dedicated team works around the clock, all year long, to continuously
      uncover new opportunities to elevate your success,
      season&nbsp;after&nbsp;season.
    </p>
  </div>
  <div className="right w-[50%] h-full">
    <div className="up h-[50%] w-full flex justify-center items-end gap-[16.73px] pb-[8.365px]">
      {/* <div class="box1 w-[167.284px] h-[167.284px] rounded-[8.364px] shrink-0"> */}
      <img
        className="w-[167.284px] h-[167.284px] rounded-[8.364px] shrink-0 object-cover"
        src="/assests/01.png"
        alt=""
      />
      {/* </div> */}
      {/* <div class="box2 w-[167.284px] h-[250.926px] bg-black rounded-[8.364px] shrink-0"> */}
      <img
        className=" w-[167.284px] h-[250.926px] rounded-[8.364px] shrink-0 object-cover"
        src="/assests/02.png"
        alt=""
      />
      {/* </div> */}
    </div>
    <div className="down h-[50%] w-full flex justify-center items-start gap-[16.73px] pt-[8.365px]">
      {/* <div class="box3 w-[200.741px] h-[133.827px] bg-black rounded-[8.364px] shrink-0"> */}
      <img
        className="w-[200.741px] h-[133.827px] rounded-[8.364px] shrink-0 object-cover"
        src="/assests/03.png"
        alt=""
      />
      {/* </div> */}
      {/* <div class="box4 w-[167.284px] h-[250.926px] bg-black rounded-[8.364px] shrink-0"> */}
      <img
        className="w-[167.284px] h-[250.926px] rounded-[8.364px] shrink-0 object-cover"
        src="/assests/04.png"
        alt=""
      />
      {/* </div> */}
      {/* <div class="box5 w-[200.741px] h-[133.827px] bg-black rounded-[8.364px] shrink-0"> */}
      <img
        className="w-[200.741px] h-[133.827px] rounded-[8.364px] shrink-0 object-cover"
        src="/assests/05.png"
        alt=""
      />
      {/* </div> */}
    </div>
  </div>
</div>

  )
}

export default AboutusComp