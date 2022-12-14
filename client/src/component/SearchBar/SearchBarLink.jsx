import React from "react";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

const SearchBarLink = (props) => {

  return (
    <div className={style.main}>
      <div className={style.link2}>
        <Link to="/"  className={style.link1} onClick={ props.isMobile && props.closeMobileMenu}>
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
