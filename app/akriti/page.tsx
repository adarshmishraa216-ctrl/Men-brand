"use client"
import React from 'react'
import AkritiTopHeading from './AkritiTopHeading'
import AkritiNavbar from './AkritiNavbar'
import AkritiHeroBanner from './AkritiHeroBanner'
import AkritiAbout from './AkritiAbout'
import AkritiBenefits from './AkritiBenefits'
import AkritiIngredient from './AkritiIngredient'
import AkritiUse from './AkritiUse'
import AkritModel from './AkritiModel'
import AkritiFrequent from './AkritiFrequent'
import AkritiButtomBanner from './AkritiButtomBanner'
import AkritiFooter from './AkritiFooter'




const Page = () => {
  return (
    <div>
      <AkritiTopHeading />
      <AkritiNavbar/>
      <AkritiHeroBanner/>
      <AkritiAbout/>
      <AkritiBenefits/>
      <AkritiIngredient/>
      <AkritiUse/>
      <AkritModel/>
      <AkritiFrequent/>
      <AkritiButtomBanner/>
      <AkritiFooter/>
      
    </div>
  )
}

export default Page