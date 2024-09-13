import React from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'

const BookAppoint = () => {
  return (
      <div className="shadow-[0px_8px_16px_0px_rgba(255,255,255,0.07)] w-full h-full relative flex items-center md:my-10 sm:my-8">
        <div className="md:w-[605px] md:h-[688px] relative">
            <Image src="/assests/05.png" alt="" fill className="object-cover" />
        </div>
        <div className="md:bg-[#3D3D3D] md:w-[60vw] md:h-[608px] w-full p-6 md:absolute md:right-36">
          <p className="font-semibold md:text-2xl sm:text-xl text-base">Contact info</p>
          <form className="grid md:grid-cols-2 grid-cols-1 gap-6 my-4">
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full md:text-base text-sm bg-transparent text-gray-700 border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Name" />
          </div>
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full md:text-base text-sm bg-transparent text-gray-700 border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Phone Number" />
          </div>
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full md:text-base text-sm bg-transparent text-gray-700 border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Date" />
          </div>
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full md:text-base text-sm bg-transparent text-gray-700 border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Time" />
          </div>

          </form>
          <div className="md:bg-[#3D3D3D] w-full md:my-8">
            <p className="font-semibold md:text-2xl sm:text-xl text-base">Contact info</p>
            <form className="grid grid-cols-2 gap-6 spac-x-8 my-4">
            <div className="w-full">
              <input
                type="text" className="appearance-none block w-full md:text-base text-sm bg-transparent text-gray-700 border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Date" />
            </div>
            <div className="w-full">
              <input
                type="text" className="appearance-none block w-full md:text-base text-sm bg-transparent text-gray-700 border border-[#858587] rounded md:py-3 sm:py-2 py-1 md:px-4 px-2 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Time" />
            </div>

            </form>

          </div>
          
          <p className="font-semibold md:text-2xl sm:text-xl text-base">Select service needed</p>
          <button className="md:text-base text-sm bg-primary-main rounded p-2 md:mt-10 sm:mt-6 mt-4">Make an Appointment</button>
        </div>

      </div>
  )
}

export default BookAppoint