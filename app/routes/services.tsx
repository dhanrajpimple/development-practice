import React from 'react'

import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import ServiceHero from '~/components/ServiceHero'
import ServiceList from '~/components/ServiceList'

const services = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <ServiceHero/>
        <ServiceList/>
    
        <Footer/>
    </div>
  )
}

export default services