import React from 'react'
import Img from '../assets/images.jpg';
import '../style/profile.css'
function ProfileCard() {
  return (
    <>
    <div className='profile'>
    <div class="pc">
        <div class="user-image">
            <img src={Img}
            alt="this image contains user-image" />
        </div>
 
        <div class="content">
            <h3 class="name">Jackson Schutt</h3>
            <p class="username">@Jackson</p>
 
 
 
            <p class="details">
              all your stats in 1 place
            </p>
 
 
            <h5 class="effect effect-4" >
                Workouts 
            </h5>
        </div>
    </div>
    <div class="pc">
        <div class="user-image">
            <img src={Img}
            alt="this image contains user-image" />
        </div>
 
        <div class="content">
            <h3 class="name">Jackson Schutt</h3>
            <p class="username">@Jackson</p>
 
 
 
            <p class="details">
              all your stats in 1 place
            </p>
 
 
            <h5 class="effect effect-4" >
                Workouts 
            </h5>
        </div>
    </div>
    <div class="pc">
        <div class="user-image">
            <img src={Img}
            alt="this image contains user-image" />
        </div>
 
        <div class="content">
            <h3 class="name">Jackson Schutt</h3>
            <p class="username">@Jackson</p>
 
 
 
            <p class="details">
              all your stats in 1 place
            </p>
 
 
            <h5 class="effect effect-4" >
                Workouts 
            </h5>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProfileCard