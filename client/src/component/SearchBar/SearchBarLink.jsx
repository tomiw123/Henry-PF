import React from "react";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const SearchBarLink = (props) => {

  const animateForm = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return (
    <div className={style.main}>
      <div className={style.link}>
        <Link to="/" className={style.link1} onClick={ props.isMobile && props.closeMobileMenu}>
          <p>Home</p>
        </Link>

        <Link to="/products" className={style.link1} onClick={ props.isMobile && props.closeMobileMenu}>
          <p>Productos</p>
        </Link>

        <Link to="/recipes" className={style.link1} onClick={ props.isMobile && props.closeMobileMenu}>
          <p>Recetas</p>
        </Link>

        
        <Link to="/contacto" className={style.link1} onClick={ props.isMobile && props.closeMobileMenu}>
          <p>Contacto</p>
        </Link>

      </div>
    </div>
  );
};

export default SearchBarLink;
