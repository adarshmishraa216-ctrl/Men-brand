"use client"
import React from 'react'
import TopHeading from './component/TopHeading'
import Navbar from './component/Navbar'
import HeroBanner from './component/HeroBanner'
import AboutAkriti from './component/AboutAkriti'
import Benefits from './component/Benefits'
import Ingredient from './component/Ingredient'
import AkritiUse from './component/AkritiUse'
import AkritModel from './component/AkritModel'
import Frequent from './component/Frequent'
import ButtomBanner from './component/ButtomBanner'
import Footer from './component/Footer'


const Page = () => {
  return (
    <div>
      <TopHeading />
      <Navbar/>
      <HeroBanner/>
      <AboutAkriti/>
      <Benefits/>
      <Ingredient/>
      <AkritiUse/>
      <AkritModel/>
      <Frequent/>
      <ButtomBanner/>
      <Footer/>
    </div>
  )
}

export default Page