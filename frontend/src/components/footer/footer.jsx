import React from 'react'
import "./footer.css"
import footer_logo from"../assets/logo_big.png"
import instagram_icon from"../assets/instagram_icon.png"
import pintester_icon from"../assets/pintester_icon.png"
import whatsapp_icon from"../assets/whatsapp_icon.png"

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img sxcr={footer_logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>COMPANY</li>
        <li>PRODUCTS</li>
        <li>OFFICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram_icon} alt=''/>
        </div>
        <div className='footer-icons-container'>
            <img src={pintester_icon} alt=''/>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt=''/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright@2024 - All right reserved</p>
      </div>
    </div>
  )
}

export default footer
