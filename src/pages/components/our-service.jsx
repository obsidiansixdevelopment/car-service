import React from 'react'
import HeadSubhead from './head-subhead'
import ServiceCard from './cards/service-card'

const OurService = () => {
  return (
    <div className="mb-10 mt-40 max-w-6xl mx-auto">
        <HeadSubhead name={'What we offer'} subname={'Our Services'} />
        <div className="grid grid-cols-3 gap-14 my-9">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
        <div className="flex justify-center">
            <button className="text-primary-main border-2 p-2 px-4 rounded border-primary-main">View all Services</button>
        </div>
    </div>
  )
}

export default OurService