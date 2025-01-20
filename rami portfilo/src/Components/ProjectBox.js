import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Arab-signDesc": "Welcome to the Arab Sign Platform, where creative content, sign language learning, and educational resources come together in one place for the Deaf community in Arabic-speaking countries.",
    // ShakeShakeGithub : "",
    "Arab-signWebsite": "https://www.arab-sign.org/",

    "Rent ChickenDesc": "Discover the joy of raising your own chickens without the long-term commitment! At Rent-a-Chicken, we make it easy for families and individuals to enjoy the benefits of backyard hens. Our service provides everything you need for a fun and educational experience, from adorable, fully grown hens to a cozy coop and all necessary supplies.",
    // RogFreeGithub : "",
    "Rent ChickenWebsite": "https://website.rentchicken.net/",

    BooksmmDesc: "BookSMM is a platform that serves as a gateway to a vast array of Social Media Marketing (SMM) services and providers. It offers users access to over 1.5 million services and more than 5,000 panels, enabling businesses and individuals to promote their presence across various social networks..",
    // NewsletterGithub:"",
    BooksmmWebsite: "https://booksmmapi.worldq8.com/",

  }

  // let show ='';
  // if(desc[projectName + 'Github']===""){
  //   show="none";
  // }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        {/* <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a> */}

        <a href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox