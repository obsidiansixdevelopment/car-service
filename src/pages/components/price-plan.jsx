import React from 'react'
import HeadSubhead from './head-subhead'

const PricePlan = () => {
  return (
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <HeadSubhead name={'Pricing Plan'} subname={'choose the Right for you'} />
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 xl:gap-10 lg:space-y-0 xl:px-0 px-2 md:mt-20">
          {/* Pricing Card */}
          <div className="flex flex-col p-4 mx-auto max-w-lg text-start text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-white dark:text-[#222222]">
            <h3 className="md:mb-4 sm:mb-2 md:text-2xl text-xl font-semibold">Basic oil Change</h3>
            <p className="font-normal text-[#858587] md:text-lg sm:text-base text-sm dark:text-gray-400">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
            </p>
            <div className="flex items-baseline md:my-4 sm:my-2 my-1">
              <span className="mr-2 md:text-5xl sm:text-4xl text-3xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400 md:text-base text-sm">/month</span>
            </div>
            <p className="md:text-lg sm:text-base text-sm font-bold">What’s included</p>
            {/* List */}
            <ul role="list" className="md:mb-8 sm:mb-6 mb-4 md:space-y-4 sm:space-y-2 text-left">
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Premium support: <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs md:px-5 sm:px-3 px-2 md:py-2.5 py-1.5 text-center dark:text-white  dark:focus:ring-primary-900 bg-primary-main md:text-sm"
            >
            Make an Appointment
            </a>
          </div>
          <div className="relative">
            <div className="md:absolute bottom-10 flex flex-col p-4 mx-auto max-w-lg text-start text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-primary-main dark:text-white ">
                <h3 className="md:mb-4 sm:mb-2 md:text-2xl text-xl font-semibold">Basic oil Change</h3>
                <p className="font-normal text-[#858587] md:text-lg sm:text-base text-sm dark:text-gray-400">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
                </p>
                <div className="flex items-baseline md:my-4 sm:my-2 my-1">
                <span className="mr-2 md:text-5xl sm:text-4xl text-3xl font-extrabold">$29</span>
                <span className="text-gray-500 dark:text-gray-400 md:text-base text-sm">/month</span>
                </div>
                <p className="md:text-lg sm:text-base text-sm font-bold">What’s included</p>
                {/* List */}
                <ul role="list" className="md:mb-8 sm:mb-6 mb-4 md:space-y-4 sm:space-y-2 text-left">
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span>Individual configuration</span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span>
                    Team size: <span className="font-semibold">1 developer</span>
                    </span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span>
                    Premium support: <span className="font-semibold">6 months</span>
                    </span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span>
                    Free updates: <span className="font-semibold">6 months</span>
                    </span>
                </li>
                </ul>
                <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs md:px-5 sm:px-3 px-2 md:py-2.5 py-1.5 text-center dark:text-primary-main  dark:focus:ring-primary-900 bg-white md:text-sm"
                >
                Make an Appointment
                </a>
            </div>

          </div>
          <div className="flex flex-col p-4 mx-auto max-w-lg text-start text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-white dark:text-[#222222]">
            <h3 className="md:mb-4 sm:mb-2 md:text-2xl text-xl font-semibold">Basic oil Change</h3>
            <p className="font-normal text-[#858587] md:text-lg sm:text-base text-sm dark:text-gray-400">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
            </p>
            <div className="flex items-baseline md:my-4 sm:my-2 my-1">
              <span className="mr-2 md:text-5xl sm:text-4xl text-3xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400 md:text-base text-sm">/month</span>
            </div>
            <p className="md:text-lg sm:text-base text-sm font-bold">What’s included</p>
            {/* List */}
            <ul role="list" className="md:mb-8 sm:mb-6 mb-4 md:space-y-4 sm:space-y-2 text-left">
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Premium support: <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs md:px-5 sm:px-3 px-2 md:py-2.5 py-1.5 text-center dark:text-white  dark:focus:ring-primary-900 bg-primary-main md:text-sm"
            >
            Make an Appointment
            </a>
          </div>
        </div>
      </div>
  )
}

export default PricePlan