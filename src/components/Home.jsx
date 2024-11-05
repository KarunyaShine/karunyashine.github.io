import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Profile_img from '../components/proff2.png'
import '../components/Home.css'


const Home = () => {
  return (
    <div className='intro'>
         
         <h1><span>Hello! I'm Karunya L Shine ,</span> <br /> Front-end developer.</h1>
         <img className='intro-img' src={Profile_img} alt='image'/> 
        <p>I’m a front-end developer skilled in Python, dedicated to crafting engaging 
        and interactive web experiences that prioritize user satisfaction.</p>
        <div className='intro-action'>
          {/* <div className='intro-resume'>My resume</div> */}
          
        </div>
       </div>

  )
}

export default Home