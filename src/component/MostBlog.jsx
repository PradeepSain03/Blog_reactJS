import React from 'react'
import Travel from '../assets/images (1).jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from '../assets/img.jpg'
function MostBlog() {
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
     <div className='lblog  '>
        <h1>Most Related Blog </h1>
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
    <div className='lblogg11'>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog' />
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that </p>

    </div>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog' />
       
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is 
</p>

    </div>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog'/>
       
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that 
</p>

    </div>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog'/>
       
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is 
</p>

    </div>
    </div>
  
<div className="button" >
              <button className="but1">View More</button>
            </div>



            <div className='lblog'>
        <h1>Tranding Blogs </h1>
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
    <div className='lblogg11'>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog' />
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that </p>

    </div>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog' />
       
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is 
</p>

    </div>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog'/>
       
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that 
</p>

    </div>
    <div className='lblogg22'>
        <img src={Travel} className='imgblog'/>
       
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is 
</p>

    </div>
    </div>
  
<div className="button" >
              <button className="but1">View More</button>
            </div>



            <div className='lblog'>
        <h1>Recommended Blogs </h1>
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
    <div className="imgslider">
                <Slider {...settings}>
                   <img src={Logo} className="img3"/>
                   <img src={Logo} className="img3" />
                   <img src={Logo} className="img3"/>
                </Slider>
            </div>


    </>
  )
}

export default MostBlog