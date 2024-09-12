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
     <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 my-20">
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