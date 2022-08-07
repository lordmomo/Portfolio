import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Sashank</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Tstimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook/></a>
       <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><FiTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Sashank Shrestha. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer