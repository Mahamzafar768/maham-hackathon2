import React from 'react'
import Hero from './components/hero'

import PickupCard from './components/pickupcard'
import Selling from './components/selling'
import CarDetail from './car-category/page'

const Home = () => {
  return (
    <>
     <Hero />
    
     <PickupCard />
     <Selling />
     <CarDetail />

    </>
  
  )
}

export default Home