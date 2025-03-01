import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img}></img>
      <h1>
        <span>I'M Balakrishna,</span> Fullstack developer,JAVA programmer.
      </h1>
      <p>I am student in GMRIT. Currently pursuing B.Tech 4th year. Ready to take the job to represent myself in the profession.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='nachor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
