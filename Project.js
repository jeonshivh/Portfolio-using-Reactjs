import React from 'react'
//import {GitHubIcon} from '@mui/icons-material';
import { Element } from 'react-scroll';
import img from './rain.jpeg'
import img1 from './pr1.jpg'
import img2 from './pg1.jpeg'
import img3 from './pg2.jpeg'
import img4 from './bkcover.jpeg'
import img5 from './sun.jpeg'
import './App.css'
function Project() {
  return (
    
      <Element name="project" >
        <div className='header-pro'> 
        <h1>MY PROJECTS</h1>
       
       <div className='coin'>
        <img src={img1} alt=""></img>
       
       </div>
       <button ><a href="https://github.com/jeonshivh">GITHUB LINK</a></button>
        </div>
        
       <div className='topic'>
        <h1>SKILLS</h1>
        <h2>POETRY</h2>
        </div>
      <div className="container3">
        <div className='hobbies'>
      
        <img  style={{height:"400px",width:"300px"}} src={img4} alt=""></img>
      
        <img  style={{height:"400px",width:"300px"}} src={img2} alt=""></img>
      
        <img  style={{height:"400px",width:"300px"}} src={img3} alt=""></img>
       
</div>
</div>
<div className='foto'>
<h2>PHOTOGRAPHY</h2>
<img  style={{height:"500px",width:"400px"}} src={img5} alt=""></img>
      
<img  style={{height:"500px",width:"300px"}} src={img} alt=""></img>
</div>
        </Element>
        

      
    
  )
}

export default Project;