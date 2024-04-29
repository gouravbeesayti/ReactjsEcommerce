import React from 'react'
import HeroSection from './components/HeroSection'
import { AppContext, useGlobalProductContext } from './context/ProductContext';



const About = () => {
  const { myName } = useGlobalProductContext(AppContext); // to remove this line we will use costome hook and create the global this line used inside costome hook

  const data = {
    name: "Ecommerce Store"
  };

  return (<>
    {myName}
    <HeroSection myData={data} />

  </>
  )
}

export default About