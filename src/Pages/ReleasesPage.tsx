import React from 'react'
import HeroSection1 from '../Components/Releases/HeroSection/HeroSection1'
import HeroSection2 from '../Components/Releases/HeroSection/HeroSection2'
import HeroSection3 from '../Components/Releases/HeroSection/HeroSection3'
import HeroSection4 from '../Components/Releases/HeroSection/HeroSection4'
import Section_Releases2 from '../Components/Releases/Section_Releases/Section_Releases2'
import Section_Releases3 from '../Components/Releases/Section_Releases/Section_Releases3'
import Section_Releases4 from '../Components/Releases/Section_Releases/Section_Releases4'
import CC_Transparent from '../Components/Releases/CC_Transparent'
import Section_Releases1 from '../Components/Releases/Section_Releases/Section_Releases1'

export default function ReleasesPage() {
  return (
    <>
    <CC_Transparent/>
    <HeroSection1/>
    <Section_Releases1/>
    <HeroSection2/>
    <Section_Releases2/>
    <HeroSection3/>
    <Section_Releases3/>
    <HeroSection4/>
    <Section_Releases4/>
    </>
  )
}
