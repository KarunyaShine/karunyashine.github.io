// import React from 'react'
// import '../components/Skill.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

// const Skill = () => {
//   return (
//     <div class="info">
// <div className="skills-container">
//       <div className="cards-container">
//         <div className="card">
        
//           <h2>Hard Skills</h2>
//           <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JAVASCRIPT</li>
//             <li>REACT.JS</li>
//             <li>SQL</li>
//             <li>WINDOWS</li>
//             <li>MICROSOFT OFFICE</li>
//             <li>CANVA</li>
//             <li>ADOBE CREATIVE CLOUD</li>
//           </ul>
//         </div>
//         <div className="card">
//           <h2>Soft Skills</h2>
//           <ul>
//             <li>COMMUNICATION SKILL </li>
//             <li>TEAMWORK</li>
//             <li>PROBLEM-SOLVING</li>
//             <li>ADAPTABILITY</li>
//             <li>TIME MANAGEMENT</li>
//           </ul>
//         </div>
//         <div className="card">
//           <h2>Interests</h2>

//           <ul>
//             <li>CODING</li>
//             <li>ART & CRAFT</li>
//             <li>TRAVELING</li>
//             <li>POSTER-MAKING</li>
//           </ul>
//         </div>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default Skill
import React from 'react';
import '../components/Skill.css'
import html from '../components/html.jpg'; // Update the path accordingly
 import css from '../components/css.jpg'
 import boots from '../components/boot.jpg'
 import reactLogo from '../components/react.jpg' // 'react' is a reserved keyword
 import java from '../components/javascri.jpg'
 import msoffice from '../components/micro.jpg'


const Skills = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        
      <span className="card-text">
                HTML (HyperText Markup Language) is the foundation of web development, allowing me to structure content and create semantic, accessible web pages.
              </span>
        <div className="col">
          <div className="card h-100">
         
            <img src={html} className="card-img-top hover-image" alt="html" />
            <div className="card-body">
              {/* <h5 className="card-title">HTML</h5> */}
              
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card h-100">
            <img src={css} className="card-img-top" alt="css" />
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">
                Strong proficiency in CSS allows me to create responsive, visually appealing, and user-friendly layouts. I utilize Flexbox, Grid, and media queries for modern design techniques.
              </p>
            </div>
          </div>
        </div>

      
        <div className="col">
          <div className="card h-100">
            <img src={boots} className="card-img-top" alt="Bootstrap" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
              Proficient in building responsive, mobile-first websites using Bootstrap’s grid system and components. Experienced in customizing themes, integrating with React.js, and ensuring cross-browser compatibility. Skilled in utilizing Bootstrap’s utilities for efficient styling and creating interactive elements like forms, modals, and tooltips.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100">
            <img src={java} className="card-img-top" alt="JavaScript" />
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">
                JavaScript is a versatile language for building dynamic, interactive web applications. With skills in front-end and back-end development, I can create responsive interfaces.
              </p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card h-100">
            <img src={reactLogo} className="card-img-top" alt="React.js" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">
                React is my go-to JavaScript library for building dynamic, single-page applications. I use hooks, state management, and component-based architecture to create fast, interactive web apps.
              </p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card h-100">
            <img src={msoffice} className="card-img-top" alt="MS Office" />
            <div className="card-body">
              <h5 className="card-title">MS Office</h5>
              <p className="card-text">
              Proficient in MS Word for creating, formatting, and editing documents. Skilled in using advanced features such as styles, tables, and references for structured documents. Experienced in MS PowerPoint for designing engaging presentations with multimedia elements and advanced features.


              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;