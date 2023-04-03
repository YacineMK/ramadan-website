import React from "react";
import './Footer.css';
import logo from '../images/la-technologie.png';



const Footer = () => {
  return (
    <footer>
     <div className="box-n-1">
    <img src={logo} alt=""  />
    <span >Halal hackathon</span>
  </div>
  <div className="box-n">
    <span className="list-title">Quick links</span>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Event</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </div>
  <div className="box-n">
    <span className="list-title">Ressources</span>
    <ul>
      <li><a href="#">Community discord </a></li>
      <li><a href="#">Links</a></li>
      <li><a href="#">Channel</a></li>
    </ul>
  </div>
  <div className="box-n">
    <span className="list-title">social media</span>
    <ul>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">linkdln</a></li>
      <li><a href="#"> Git Hub</a></li>
    </ul>
  </div>
  </footer>
  )
}

export default Footer