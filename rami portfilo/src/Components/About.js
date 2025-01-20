import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Rami Maghrbi </b> and I am from Damascus, Syria.
            I'm a <b>Front End developer</b> and a i studied at <b>Arab International Univercity in Syria</b>. <br/><br/>
            I working  now  as a <b> React Js Developer</b> at Al Fahid IT .
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Html' />
        <Skills skill='Css' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Next' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Node' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Java' />
        <Skills skill='C++' />
        <Skills skill='Npm' />
        
      </div>
    </>
  )
}

export default About