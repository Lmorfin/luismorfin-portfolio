import React from 'react'
import './footer.css'


const Footer = () => {

  return (
    <footer>
      <a href="#" className='footer__logo'>Luis Morfin</a>

      <ul className='links'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#contact">Contact</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#portfolio">Portfolio</a> </li>
      </ul>

    </footer>
  )
}

export default Footer

