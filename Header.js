import React from 'react'
import { Link } from 'react-scroll'
//import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
             
        </div>
        <div className='header-right'>
             <Link to="home" smooth={true} duration={450}>
                <h5>Home</h5>
             </Link>
             <Link to="about" smooth={true} duration={450}>
                <h5>About</h5>
             </Link>
             <Link to="projects" smooth={true} duration={450}>
                <h5>Projects</h5>
             </Link>
            
            
             
        </div>

    </div>
  )
}

export default Header