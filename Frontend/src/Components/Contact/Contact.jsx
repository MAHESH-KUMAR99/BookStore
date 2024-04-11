import React from 'react'
import Navbar from '../Navbar'
import ContactUs from '../ContactUs'
import Footer from '../Footer'

function Contact() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <ContactUs/>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
