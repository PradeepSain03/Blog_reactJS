import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from '../assets/img.jpg'

import React from 'react'
 
const ImageSlider = ({ images }) => {
 
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
 
    };
    return (
        <>
          
            <div className="imgslider">
                <Slider {...settings}>
                   <img src={Logo} className="img3"/>
                   <img src={Logo} className="img3" />
                   <img src={Logo} className="img3"/>
                </Slider>
            </div>
            <div className="button" >
              <button className="but1">Explore All Blog Catagory</button>
            </div>
        </>
    )
}
export default ImageSlider;