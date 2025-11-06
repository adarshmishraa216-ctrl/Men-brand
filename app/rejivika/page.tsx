"use client"
import React from 'react'
import RejivikaTopHeading from '../component/RejivikaTopHeading'
import RejivikaNavbar from '../component/RejivikaNavbar'
import RejivikaHeroBanner from '../component/RejivikaHeroBanner'
import RejivikaAbout from '../component/RejivikaAbout'
import RejivikaBenefits from '../component/RejivikaBenefits'
import RejivikaIngredient from '../component/RejivikaIngredient'
import RejivikaUse from '../component/RejivikaUse'
import RejivikaModel from '../component/RejivikaModel'
import RejivikaFrequent from '../component/RejivikaFrequent'
import RejivikaButtomBanner from '../component/RejivikaButtomBanner'
import RejivikaFooter from '../component/RejivikaFooter'


const Page = () => {
  return (
    <div>
      <RejivikaTopHeading />
      <RejivikaNavbar/>
      <RejivikaHeroBanner/>
      <RejivikaAbout/>
      <RejivikaBenefits/>
      <RejivikaIngredient/>
      <RejivikaUse/>
      <RejivikaModel/>
      <RejivikaFrequent/>
      <RejivikaButtomBanner/>
      <RejivikaFooter/>
    </div>
  )
}

export default Page