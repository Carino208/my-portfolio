import "./FooterStyles.css";

import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
                <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                </h4>
                <div>
                  <p>168,Amalapuram.</p>
                  <p>Andhra Pradesh.</p>
                </div> 
                <div className="phone">
                <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                955-64-434</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                panthadiharish133@gmail.com</h4>
                </div>
            </div>
          </div>

          <div className="right">
            <h4>About me</h4>
            <p>This is me Harish Panthadi.As a web developer, I have many years of experience with CSS, JavaScript, and HTML.I enjoy learning new things.</p>
            <div className="social">
              <FaFacebook
                      size={20}
                      style={{ color: "#fff",
                       marginRight: "1rem" }}
              />
               <FaTwitter
                      size={20}
                      style={{ color: "#fff",
                       marginRight: "1rem" }}
              />
               <FaLinkedin
                      size={20}
                      style={{ color: "#fff",
                       marginRight: "1rem" }}
              />
            </div>

          </div>  
        </div>
    </div>
  )
}

export default Footer