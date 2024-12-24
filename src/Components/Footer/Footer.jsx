// import React from 'react'
// import './Footer.css'
// import footer_logo from '../../assets/final-logo.jpg'
// import user_icon from '../../assets/user_icon.svg'
// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-top">
//             <div className="footer-top-left">
//                 <img src={footer_logo} alt="" />
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur minus laboriosam dicta, a autem sed voluptate ea quas molestias, corrupti esse vitae assumenda aperiam sequi eos nulla minima totam.</p>
//             </div>
//             <div className="footer-top-right">
//                 <div className="footer-email-input">
//                     <img src={user_icon} alt="" />
//                     <input type="email" placeholder='Enter your email' />
//                 </div>
//             </div>
//         </div>
//          <hr />
//          <div className="footer-bottom">
//             <p className="footer-bottom-left">© 2024 Aman Shukla. All rights reserved.</p>
//             <div className="footer-bottom-right">
//                  <p>Term of Services</p>
//                  <p>Privacy Policy</p>
//                  <p>Connect with me</p>
//             </div>
//          </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/final-logo.jpg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={footer_logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
           Fueled by creativity and driven by technology, I'm always seeking new challenges that push the boundaries of what's possible.
          </p>
        </div>
        
        <div className="footer-subscribe-section">
          <h3>Stay Updated</h3>
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" className="email-icon" />
            <input type="email" placeholder='Enter your email' className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024 Aman Shukla. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Services</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#contact">Connect with me</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
