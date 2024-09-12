import React from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'

const BookAppoint = () => {
  return (
    <div>
      {/* <HeadSubhead name={'Book an'} subname={"appointment"} />  */}
      <div className="shadow-[0px_8px_16px_0px_rgba(255,255,255,0.07)] w-full h-full relative flex items-center my-10">
        <div className="w-[605px] h-[688px] relative">
            <Image src="/assests/05.png" alt="" fill className="object-cover" />
        </div>
        <div className="bg-[#3D3D3D] w-[60vw] h-[608px] p-6 absolute right-36">
          <p className="font-semibold text-2xl">Contact info</p>
          <form className="grid grid-cols-2 gap-6 spac-x-8 my-4">
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full bg-transparent text-gray-700 border border-[#858587] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Name" />
          </div>
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full bg-transparent text-gray-700 border border-[#858587] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Phone Number" />
          </div>
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full bg-transparent text-gray-700 border border-[#858587] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Date" />
          </div>
          <div className="w-full">
            <input
              type="text" className="appearance-none block w-full bg-transparent text-gray-700 border border-[#858587] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Time" />
          </div>

          </form>
          <div className="bg-[#3D3D3D] w-full my-8">
            <p className="font-semibold text-2xl">Contact info</p>
            <form className="grid grid-cols-2 gap-6 spac-x-8 my-4">
            <div className="w-full">
              <input
                type="text" className="appearance-none block w-full bg-transparent text-gray-700 border border-[#858587] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Date" />
            </div>
            <div className="w-full">
              <input
                type="text" className="appearance-none block w-full bg-transparent text-gray-700 border border-[#858587] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" placeholder="Time" />
            </div>

            </form>

          </div>
          
          <p className="font-semibold text-2xl">Select service needed</p>
          <button className="text-base bg-primary-main rounded p-2 mt-10">Make an Appointment</button>
        </div>

      </div>
    </div>
  )
}

export default BookAppoint