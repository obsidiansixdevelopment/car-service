/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Sehdule = () => {
  return (
    <div className="relative h-[25vw] text-white overflow-hidden my-10">
  <div className="absolute inset-0">
    <img
      src="/assests/09.png"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
  <div className="font-medium text-center">
        <p className="text-[#FFFFFF] text-6xl font-semibold drop-shadow-lg">Ready to schedule an <span className="block text-primary-main">appointment?</span></p>
        <p className="text-white my-5 text-xl">contact us today book  your  next service.</p>
        <button type="button" className="text-white bg-primary-main hover:bg-primary-main focus:ring-4 focus:outline-none focus:ring-primary-main font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-primary-main dark:hover:bg-primary-main dark:focus:ring-primary-main">Make an Appointment</button>
    </div>
  </div>
</div>
  )
}

export default Sehdule