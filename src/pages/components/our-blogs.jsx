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
      <div className="grid grid-cols-2 gap-4 my-10">
        {
            arr.map((ele,i) => (
                <div key={i} className="grid grid-cols-2 gap-6 items-center">
                    <div className="relative h-40 w-full ">
                        <Image src="/assests/04.png" alt="No Preview" fill className="" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Enjoy a pleasure</p>
                        <p className="text-[#858587] mt-2">Donec et odio pellentesque diam volutpat commodo sed. Enim nunc faucibus a pellentesque sit amet porttitor. Posuere sollicitudin.</p>
                    </div>
                </div>

            ))
        }
      </div>

    </div>
  )
}

export default OurBlogs