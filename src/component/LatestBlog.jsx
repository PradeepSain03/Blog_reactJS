import React from 'react';
import "../style/Lblog.css";
import Blog from '../assets/download.jpg'


function LatestBlog() {
  return (
    <>
    <div className='lblog'>
        <h1>LATEST BLOGS - ALL CATEGORIES</h1>
        <div className='lblog2'>
            <span>Filter By Author </span>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
        <div className='lblog2'>
            <span>Filter By Catagorie </span>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
        <div className='lblog2'>
            <span>sort by </span>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
    </div>



    </>

  )
}

export default LatestBlog