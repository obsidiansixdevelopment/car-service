import Image from 'next/image'
import React from 'react'

const ServiceCard = () => {
  return (
    <div className="border-[#858587] border-4 p-4 rounded-xl">
        <div className="relative h-72 w-full">
            <Image src="/assests/02.png" alt="" fill className="object-cover rounded-xl" />
        </div>
        <p className="text-xl font-semibold text-white text-center p-2 px-6">Injectors cleaning and testing</p>

    </div>
  )
}

export default ServiceCard