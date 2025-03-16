import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Second from './components/Second'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
const index = () => {
  return (
    <>
     <Navbar/>
    <Landing/>

     <Banner/>
     <About/>
    <Second/>
    <Services/>
    <Faqs/>
    <Footer/>
    </>
  )
}

export default index
