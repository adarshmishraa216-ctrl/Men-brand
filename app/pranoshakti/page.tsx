"use client"
import React from 'react'
import PranoshaktiTopHeading from '../component/PranoshaktiTopHeading'
import PranoshaktiNavbar from '../component/PranoshaktiNavbar'
import PranoshaktiHeroBanner from '../component/PranoshaktiHeroBanner'
import PranoshaktiAbout from '../component/PranoshaktiAbout'
import PranoshaktiBenefits from '../component/PranoshaktiBenefits'
import PranoshaktiIngredient from '../component/PranoshaktiIngredient'
import PranoshaktiUse from '../component/PranoshaktiPranoshaktiUse'
import PranoshaktiModel from '../component/PranoshaktiModel'
import PranoshaktiFrequent from '../component/PranoshaktiFrequent'
import PranoshaktiButtomBanner from '../component/PranoshaktiButtomBanner'
import PranoshaktiFooter from '../component/PranoshaktiFooter'


const Page = () => {
  return (
    <div>
      <PranoshaktiTopHeading />
      <PranoshaktiNavbar/>
      <PranoshaktiHeroBanner/>
      <PranoshaktiAbout/>
      <PranoshaktiBenefits/>
      <PranoshaktiIngredient/>
      <PranoshaktiUse/>
      <PranoshaktiModel/>
      <PranoshaktiFrequent/>
      <PranoshaktiButtomBanner/>
      <PranoshaktiFooter/>
    </div>
  )
}

export default Page