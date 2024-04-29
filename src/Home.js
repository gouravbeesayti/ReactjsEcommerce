import React from 'react'
import Services from './components/Services'
import Trusted from './components/Trusted'
import HeroSection from './components/HeroSection'
import FeatureProduct from './components/FeatureProduct'

const Home = () => {
  //props data sand from paraent to child
  const data = {
    name: "Shop Sizzle"
  }
  return (
    <><HeroSection myData={data} />
    <FeatureProduct/>
      <Services />
      <Trusted />
      


    </>
  )
}


export default Home