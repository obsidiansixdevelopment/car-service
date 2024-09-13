import Image from 'next/image'
import React from 'react'

const ServiceCard = () => {
  return (
    <div className="border-[#858587] border-4 md:p-4 sm:p-3 p-2 rounded-xl">
        <div className="relative md:h-72 sm:h-56 h-44  w-full">
            <Image src="/assests/02.png" alt="" fill className="object-cover rounded-xl" />
        </div>
        <p className="md:text-xl sm:text-base text-sm font-semibold text-white text-center p-2 md:px-6">Injectors cleaning and testing</p>

    </div>
  )
}

export default ServiceCard