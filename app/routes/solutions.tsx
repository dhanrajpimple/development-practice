import React from 'react'
import ContactForm from '~/components/ContactForm'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import SolutionsHero from '~/components/SolutionsHero'
import SolutionsList from '~/components/SolutionsList'
import contactbg from "~/assests/solutioncontactbg.jpeg"
const solutions = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <SolutionsHero/>
        <SolutionsList/>
        <ContactForm bgimage={contactbg}/>
        <Footer/>
    </div>
  )
}

export default solutions