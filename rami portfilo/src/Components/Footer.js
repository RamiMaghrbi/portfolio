import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Eng. MHD Rami Maghrbi </h4>
      <h4>Copyright &copy; 2025 RM</h4>
      <div className='footerLinks'>
        <a href="www.linkedin.com/in/rami-maghrbi-059658181" target='_blank'><FaLinkedin /></a>
        <a href='maghrbi19@gmail.com' target='_blank'><SiGmail /></a>
        <a href='https://wa.me/+963993841308' target='_blank'><FaWhatsapp /></a>
      </div>
    </footer>
  )
}

export default Footer