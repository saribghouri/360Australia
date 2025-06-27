import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Page = () => {
  return (
     <div>
      <div className='mt-[140px]'>

      <Header/>
      </div>
<div className='h-[40vh] items-center flex justify-center'>

    <h1 className='text-[40px] text-[#12cfc0]'>COMING SOON</h1>
</div>
      <Footer/>
    </div>
  )
}

export default Page