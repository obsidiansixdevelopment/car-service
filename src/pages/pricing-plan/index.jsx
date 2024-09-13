import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'

const index = () => {
    const arr = ["","","","","",""]
  return (
    <Layout>
        <ServiceHeroSection name={'Pricing Plan'} subname={'choose the Right for you'} img={"/assests/07.png"} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 my-10 md:mt-20 xl:px-0 px-6">
            {
                arr.map((ele,i) => (
        <div key={i} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-center text-red-500 text-2xl font-bold mb-6">
                Major Service(silver)
            </h2>
            <div className="grid grid-cols-2 gap-4 text-[#222222] md:text-lg sm:text-base text-sm">
                <ul className="space-y-2">
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Injector cleaning and
                    testing
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Engine oil and filter
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Gear oil and filter
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Maf sensor cleaning
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Air filter cleaning or
                    change
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> A/C filter cleaning or
                    change
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> A/C gas top-up
                </li>
                </ul>
                <ul className="space-y-2">
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Plugs change
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Belt change
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Throttle body cleaning and
                    calibration
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Front and rear brake pads
                    replacement
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Headlights restoration
                    (both)
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span> Headlights restoratioFull
                    health check-up report with computern (both)
                </li>
                </ul>
            </div>
            <div className="mt-6 text-center">
                <button className="bg-red-500 text-white py-2 px-8 font-medium rounded-md">
                Make an Appointment
                </button>
            </div>
            </div>

                ))
            }

        </div>
        
    </Layout>
  )
}

export default index