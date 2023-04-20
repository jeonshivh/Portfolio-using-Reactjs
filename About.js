import React from 'react'
import {Element} from 'react-scroll'
function About() {
  return (
    <Element name="about">
    <div className='outer-about'>

      

      <div className='about-right'>
      <h3>I'm an engineering student.I'm interested in
various fields apart from my main course of
study.With the passion of writing poetry and 
my curiosity to learn more knowledge,I'm 
acquiring skills.I enjoy every step in the
process of learning and innovating.
</h3>
      </div>
      <div className='about-left'>
      <img style={{height:"400px",width:"400px"}}  
      src='https://e1.pxfuel.com/desktop-wallpaper/201/793/desktop-wallpaper-bambi-w-on-aesthetic%E2%9C%A8-autumn-study-aesthetic-thumbnail.jpg' alt=""></img>
      </div>
    </div></Element>
  )
}

export default About