import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import image from "../../assets/dosdagas-png-transparente.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="saltooooo"></div>

      <div className="contact">
        <a href="https://www.facebook.com/DosDagas" target="_blanc">
          <div className="rs">
            <FaFacebookF className="icon" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/dosdagas/?fbclid=IwAR3Oy50LrpjFB0-0Dko0t34hyQD6IKfYbUdfHmZs-OMSZILqUErbv5UMHDY"
          target="_blanc"
        >
          <div className="rs">
            <FaInstagram className="icon" />
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=%2B5493874587646&text=%C2%BFComo+estas+en+que+podemos+asesorarte+en+el+dia+de+hoy%3F"
          target="_blanc"
        >
          <div className="rs">
            <FaWhatsapp className="icon" style={{ width: "80px" }} />
          </div>
        </a>
        <div className="logo">
          <Link to="/">
            <img src={image} alt="not-found" width={180} />
          </Link>
        </div>
        <div className="teldic">
          <Link to={"/contacto"}>
            <h1>CONTACTO</h1>
          </Link>
          <h2>Email: dosdagashenry@gmail.com</h2>
          <h2>Telefono: 387 458 7647</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
