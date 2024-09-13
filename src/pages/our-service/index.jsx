import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'
import ServiceCard from '../components/cards/service-card'

const page = () => {
  const arr = [
    {
      name:'',
      img:'',
    },
    {
      name:'',
      img:'',
    },
    {
      name:'',
      img:'',
    },
    {
      name:'',
      img:'',
    },
    {
      name:'',
      img:'',
    },
    {
      name:'',
      img:'',
    },
  ]
  return (
    <Layout>
     <ServiceHeroSection name={'What we offer'} subname={'Our Services'} img={"/assests/06.png"}/>
     <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-6 gap-4 md:my-20 sm:my-8 my-4 xl:px-0 px-6">
      {
        arr.map((ele,i) => (
          <div key={i}>
            <ServiceCard />
          </div>
        ))
      }
     </div>
    </Layout>
  )
}

export default page