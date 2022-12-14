import React from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import Carrito from "../Carrito/Carrito";
import image from "../../assets/dosdagas-png-transparente.png";
import SearchBarMobile from "./SearchBarMobile";
import Navegacion from "./Navegacion";

function SearchBar() {
  return (
    <div className={style.main}>
      <div className={style.image}>
        <Link to="/">
          <img src={image} alt="not-found" width={150} />
        </Link>
      </div>

      <Navegacion/>
      <SearchBarMobile/>

      <div className={style.cart}>
        <Carrito />
      </div>
    </div>
  );
}

export default SearchBar;
