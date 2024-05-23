import React from 'react';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (


    <footer className="footer">
      <section className="container">
        <div className="footer-link">   
              <div className="social-link">
                <a href="#"> <i className="fab fa-facebook-f"></i></a>
                <a href="#"> <i className="fab fa-instagram"></i></a>
                <a href="#"> <i className="fab fa-twitter"></i></a>
                <a href="#"> <i className="fab fa-discord"></i></a>
              </div>
        </div>
      <div className="footer-hr"></div>
        <section className="footer-row">
         <section className="footer-link">   
          <h4>Chicks Gold</h4>
            <ul>
             <li><a href="#">Games</a></li>
             <li><a href="#">About Us</a></li>
             <li><a href="#">Blog</a></li>
             <li><a href="#">Sistemap</a></li>
            </ul>
         </section>
         <section className="footer-link">
          <h4>Support</h4>
            <ul>
             <li><a href="#">Contact Us</a></li>
             <li><a href="#">FAQ</a></li>
            </ul>
         </section>
         <section className="footer-link">
            <h4>Legal</h4>
              <ul>
               <li><a href="#">Privacy Policy</a></li>
               <li><a href="#">Terms of Service</a></li>
               <li><a href="#">Copyright Policy</a></li>
              </ul>
         </section>
         <section className="footer-link">   
           <h4>Trustpilot Reviews</h4>
              <section className="social-link">
              <FontAwesomeIcon icon={faStar} className="icon-start" />
              <FontAwesomeIcon icon={faStar} className="icon-start" />
              <FontAwesomeIcon icon={faStar} className="icon-start" />
              <FontAwesomeIcon icon={faStar} className="icon-start" />
              </section>
          </section>
        </section>
        <section className="reserved">
          <p>@ 2017 - 2024 Chicksgold.com. All Rights Reserved</p>
        </section>
       </section>
    </footer>
  );
};
export default Footer;
