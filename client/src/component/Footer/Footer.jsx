import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='logo'>
        <Link to="/" style={{ color:"#ffffff"}}>
            <h1>hola</h1>
        </Link>
      </div>
      <hr style={{ margin:"10px 50px", color:"#96da25"}}/>
      <div className="contact">
        <div className='rs'><FaFacebookF className='icon'/></div>
        <div className='rs'><FaTwitter className='icon'/></div>
        <div className='rs'><FaInstagram className='icon'/></div>
        <div className='rs'><FaWhatsapp className='icon'/></div>
      </div>
      <div className="teldic">
        <div style={{ color:"#96da25"}}>1111 - 1111</div>
        <div style={{ color:"#96da25"}}>Av. Siempreviva 742</div>
      </div> 
    </div>
    
  )
}

export default Footer