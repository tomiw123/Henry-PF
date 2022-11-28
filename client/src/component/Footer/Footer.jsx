import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='logo'>
        <Link to="/" style={{ color:"#ffffff"}}>
            <div>
              <h1>
              DosDagas
              </h1>
              </div>
        </Link>
      </div>
      <hr style={{ margin:"10px 50px", color:"#96da25"}}/>
      <div className="contact">
        <a href="#">
        <div className='rs'><FaFacebookF className='icon'/></div>
        </a>
        <a href="#">
        <div className='rs'><FaTwitter className='icon'/></div>
        </a>
        <a href="#">
        <div className='rs'><FaInstagram className='icon'/></div>
        </a>
        <a href="#">
        <div className='rs'><FaWhatsapp className='icon'/></div>
        </a>
        <div className='teldic'>
          <Link to={'/contacto'}>
          <h1>
            CONTACTO 
          </h1>
          </Link>
          <h2>Email: aaaaaaaaaa@gmail.com</h2>
          <h2>Telefono: xxxxxxxxxxx</h2>
        </div>
      </div>
    </div>  
    
  )
}

export default Footer