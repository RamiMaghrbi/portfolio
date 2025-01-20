import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap , FaHtml5 ,FaCss3Alt , FaJava } from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import { SiPostman} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Html: <FaHtml5/>,
        Css: <FaCss3Alt/>,
        Java: <FaJava/>,
        Next: <SiNextdotjs/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
