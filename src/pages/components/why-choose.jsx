import React from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'
import { IoCall } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <HeadSubhead name={'We’re here for whatever you need'} subname={'Why choose us ?'} />
        <div className="grid grid-cols-2 gap-10 my-10">
            <div className="relative h-auto w-full">
                <Image src="/assests/03.png" alt="" fill className="object-cover rounded-xl" />
            </div>
            <div className="pt-10">
                <div className="flex gap-6">
                    <IoCall className="text-4xl bg-white text-primary-main p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold">Customer Support</p>
                        <p className="text-[#858587] mt-1.5">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
                <div className="flex gap-6 my-10">
                    <IoMdPricetags className="text-4xl bg-white text-primary-main p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold">Many Location</p>
                        <p className="text-[#858587] mt-1.5">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
                <div className="flex gap-6 my-10">
                    <FaLocationDot className="text-4xl bg-white text-primary-main p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold">Best Price Guarantted</p>
                        <p className="text-[#858587] mt-1.5">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
                <div className="flex gap-6 my-10">
                    <FaLocationDot className="text-4xl bg-white text-primary-main p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold">Best Price Guarantted</p>
                        <p className="text-[#858587] mt-1.5">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose