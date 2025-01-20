import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { FaCar } from "react-icons/fa";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MHD Rami-al-maghrbi</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product
            that impacts lives.
            I want to do work that challenges me as a developer & work that I can
            be proud of.<br /><br />
            I am fluent in <b>React JS </b> and Strong in  <b>C++ , Java</b> and i am working on a few
            projects in  <b>Next JS</b> .<br />
            I am learning <b>Node.js</b> and<b> Typescript</b> Now<br /><br />
            Also, I love <b>Cars</b> <FaCar style={{ scale: "1.5", marginLeft: "15px" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home