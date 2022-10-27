import React from 'react'
import Hero from './component/Hero/Hero'
import Feature from './component/Features/Features'
import { heroTwo, heroThree } from './data/HeroData';
import {Content} from './component/Content/Content'
const LandingPage = ({ handleHomeClick }) => {
  return (
    <>
      <Hero handleHomeClick={handleHomeClick}/>
      <Feature/>
      <Content {...heroTwo} handleHomeClick={handleHomeClick} />
			<Content {...heroThree} handleHomeClick={handleHomeClick} />
    </>
  )
}

export default LandingPage