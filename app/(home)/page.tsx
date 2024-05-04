

import React from 'react'
import { Client, Footer, Hero } from './components'
import Pricing from './components/pricing'

const HomePae = () => {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col items-center
        justify-center md:justify-start text-center
         gap-y-8 flex-1 px-6 pb-10'>
          <Hero />
          <Client />
         </div>
         <Pricing />
         <Footer/>
    </div>
  )
}

export default HomePae
