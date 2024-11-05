import React from 'react'
import '../components/About.css'
import about_image from '../../src/components/profile.png'


const Aboutme = () => {
  return (
    <div className='about'>
    <div className='about-title'>
      <h1>About Me</h1>
    </div>
    <div className='about-section'>
     <div className='about-left'>
     <img src={about_image} alt=''/>
     </div>
     <div className='about-right'>
      <p className="p-container">Hello! I’m a passionate front-end developer with a knack for creating visually appealing and user-friendly web applications. 
        With knowledge in HTML, CSS, Bootstrap and JavaScript, I specialize in turning complex ideas into 
        seamless digital experiences.
     </p>
      <p className="p-container">I thrive on challenges and enjoy collaborating with designers and developers to bring projects to life.
         My goal is to build responsive, accessible, and performant websites that engage users and meet business
          needs.</p>

      <p className="p-container">In my portfolio, you’ll find a selection of my work, showcasing my skills in React.js. 
        I believe in continuous learning and regularly explore new technologies to enhance my skill set....</p>
     </div>
    </div>
  </div>
)

}

export default Aboutme