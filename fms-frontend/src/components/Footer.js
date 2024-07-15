import React from 'react';
import '../style/ProjectStyle.css';

const Footer = () => (
  <footer className="footer">
    <div className="section__container footer__container">
      <div className="footer__col">
        <h3>MY FLIGHT</h3>
        <p>
          The Place Where Greatness Takes Off. 
          Flivan Airlines is a company that is passionate about flying and has a strong dedication to providing excellent customer service 
          and smooth travel experiences.
        </p>
        
      </div>
      
      <div className="footer__col">
        <h4>CONTACT</h4>
        <p>shreyash.zaware@coforge.com </p>
        <p> prathmesh.jaiswal@coforge.com</p>
        <p>nupoor.aher@coforge.com</p>
      </div>
    </div>
    <div className="section__container footer__bar">
      <pre>
        
         </pre>
      <div className="socials">
        <span><i className="ri-facebook-fill"></i></span>
        <span><i className="ri-twitter-fill"></i></span>
        <span><i className="ri-instagram-line"></i></span>
        <span><i className="ri-youtube-fill"></i></span>
      </div>
    </div>
  </footer>
);

export default Footer;
