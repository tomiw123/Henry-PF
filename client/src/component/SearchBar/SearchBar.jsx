import React from 'react'
import { Link } from 'react-router-dom'
import style from './SearchBar.module.css'
import Carrito from "../Carrito/Carrito";
import image from "../../assets/dosdagas-png-transparente.png";


function SearchBar() {
    return (
        <div className={style.main}>

            <div className={style.image}>
            <Link to="/">
            <img src={image} alt="not-found" width={150} />
            </Link>
                
            </div>

            <div className={style.link} >
                    <Link to="/"><p>Home</p></Link>

                    <Link to="/products"><p>Productos</p></Link>

                    <Link to="/recipes"><p>Recetas</p></Link>

                    <Link to="/contacto"><p>Contacto</p></Link>
            </div>

            <div className={style.cart}>
                    <Carrito />
            </div>
        </div>
    )
}

export default SearchBar