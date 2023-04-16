import React from 'react'
import IntroSection from '../config/components/IntroSection'
import Services from '../config/components/Services'
import Trusted from '../config/components/Trusted'
import FeatureSec from "../config/components/FeatureSec";

function Home() {
  return (
    <>
    <IntroSection storeName='Tijaraat Store'/>
    <FeatureSec/>
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home