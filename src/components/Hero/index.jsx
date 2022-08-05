import React from 'react'
import './style.scss'
import HeroHeader from './HeroHeader'
import HeroCollage from './HeroCollage'
import HeroPhoneBlack from './HeroPhoneBlack'
import HeroUsedBy from './HeroUsedBy'
import HeroFooter from './HeroFooter'
import ScrollImage from './ScrollImage'

const Hero = () => {
  return (
    <div className='hero-container'>
      <HeroHeader />
      <div className='hero-media'>
        <HeroCollage />
        <HeroPhoneBlack />
      </div>
      <HeroUsedBy />
      <HeroFooter />
      <ScrollImage/>
      <ScrollImage/>
    </div>
  )
}

export default Hero