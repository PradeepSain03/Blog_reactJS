import React from "react"
import { Link } from "react-router-dom"
import '../style/Head.css'
import Logo from '../assets/logo.jpg';
import Landing from '../assets/landingg.jpg.webp'

function Header () {
  return (
    <>
         <div className='Head'>
            <div className='Head1'>
        <img src={Logo} className="img" />
            <nav className='nav'>
                <li><a href='#home' >HOME</a></li>
                <li><a href='#home' >ABOUT</a></li>
                <li><a href='#home' >CAREER</a></li>
                <li><a href='#home' >BLOG</a></li>
                <li><a href='#home' >CONTACT US</a></li>
            </nav>
            </div>
            </div>
            <div className="landing">
           <input type='text' placeholder='Search and hit enter...' className="search-box search" />
            </div>
    </>
  )
}

export default Header