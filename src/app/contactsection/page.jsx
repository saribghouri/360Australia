import React from 'react'
import ContactUs from '../components/contact-us'
import Header from '../components/header'
import AnimatedMarketingSection from '../components/hero-section';
import Footer from '../components/footer';

const Page = () => {
  return (
    <div>
      <div className='mt-[140px]'>

      <Header/>
      </div>

      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Page