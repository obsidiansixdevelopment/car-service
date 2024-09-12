import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'
import BookAppoint from '../components/book-appoint'
import Image from 'next/image'
import { IoCall } from 'react-icons/io5'
import { IoMdPricetags } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

const ContactUs = () => {
  return (
    <Layout>
        <ServiceHeroSection img={'/assests/08.png'} name={'Contact Us'} subname={'Make an Appointment'} />
        <BookAppoint />
        <div className="grid grid-cols-2 gap-10 my-10 max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={480}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            />

            </div>
            <div className="pt-10">
                <p className="text-[2.5rem] font-bold">Contact Us</p>
                <div className="flex gap-6 mt-4">
                    <IoCall className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold">Phone</p>
                        <p className="text-[#858587] mt-1.5">+91 7925846989 , +91 7925846989</p>
                    </div>
                </div>
                <div className="flex gap-6 my-10">
                    <IoMdPricetags className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold">Email</p>
                        <p className="text-[#858587] mt-1.5">infoliquam@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-6 my-10">
                    <FaLocationDot className="text-4xl bg-primary-main text-white p-2 rounded-lg" />
                    <div>
                        <p className="text-2xl font-semibold"> Location</p>
                        <p className="text-[#858587] mt-1.5">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </Layout>
  )
}

export default ContactUs