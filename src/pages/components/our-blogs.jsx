import React from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'

const OurBlogs = () => {
    const arr = [
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
    ]
  return (
    <div className='max-w-7xl mx-auto'>
        
      <HeadSubhead name={'Our Blog'} subname={"What’s New?"} />
      <div className="grid md:grid-cols-2 gap-4 my-10 xl:px-0 px-6">
        {
            arr.map((ele,i) => (
                <div key={i} className="grid md:grid-cols-2 md:gap-6 sm:gap-4 gap-2 items-center">
                    <div className="relative md:h-40 sm:h-32 h-28  w-full ">
                        <Image src="/assests/04.png" alt="No Preview" fill className="" />
                    </div>
                    <div>
                        <p className="md:text-2xl sm:text-xl text-base font-bold">Enjoy a pleasure</p>
                        <p className="text-[#858587] mt-2 md:text-base sm:text-sm text-xs">Donec et odio pellentesque diam volutpat commodo sed. Enim nunc faucibus a pellentesque sit amet porttitor. Posuere sollicitudin.</p>
                    </div>
                </div>

            ))
        }
      </div>

    </div>
  )
}

export default OurBlogs