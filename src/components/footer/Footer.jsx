import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>i am a fullstack developer from india and develop some projects on frontend</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            @2023 balakrishna.all rights are reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term Of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
