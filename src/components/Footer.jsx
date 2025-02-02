import React from 'react';
import '../styles/Footer.css';
import isteLogo from "../assets/global/IsteFinal.svg";
import kjsceLogo from "../assets/global/kjsce_white.svg";
import instagramIcon from "../assets/icons/instagram.svg";  
import linkedinIcon from "../assets/icons/linkedin.svg";
import kjscelogo from "../assets/global/kjsce_white.svg";
import emailIcon from "../assets/icons/image.png";

const Footer = () => {
  return (
    <footer className="footer">
      

      <div className="logo-container">
  <img className="isteLogo" src={isteLogo} alt="ISTE Logo" />
  <p className="logo-text">ISTE KJSCE</p>
  <a 
    href="https://www.istekjsce.com" 
    className="logo-subtext" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Indian Society for Technical Education
  </a>
</div>
<div className="kjscelogo-container">
        <img src={kjscelogo} alt="KJSCE Logo" className="kjscelogo" />
        <p className="kjscelogo-text">KJ Somaiya School of Engineering, Vidyavihar</p>
        <p className="Kjscelogo-write">
          Krisha Kapadia: 8976856057
          <br />
          <span className="spacer"></span>
          Garv Vyas: 9152777930
        </p>
      </div>


      {/* Social Media Links */}
      <div className="social-links">
  <div className="social-icons-container">
    <a
      href="https://www.instagram.com/istekjsce/"
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
    </a>
    <a
      href="https://www.linkedin.com/company/istekjsce/"
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
    </a>
    <a href="mailto:info@istekjsce.com" className="social-icon">
      <img src={emailIcon} alt="Email" className="social-icon-img" />
    </a>
  </div>
  <p className="Class-text">FOLLOW US</p>
</div>
 
      
    </footer>
  );
};

export default Footer;