import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './component/Header';
import ImageSlider from './component/Slider';
import LatestBlog from './component/LatestBlog';
import LatestBlog1 from './component/LatestBlog1';
import MostBlog from './component/MostBlog';
import Profile from './component/ProfileCard';
import Footer from './component/footer'
function App() {
  

  return (
    <>
   
  <Header/>
  <ImageSlider/>
  <LatestBlog/>
  <LatestBlog1/>
  <MostBlog/>
  <Profile/>
  <Footer/>
   
     
     
    </>
  )
}

export default App
