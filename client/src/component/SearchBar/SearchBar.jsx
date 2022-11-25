import React from 'react'
import { Link } from 'react-router-dom'
import style from './SearchBar.module.css'


function SearchBar() {
    return (
        <div className={style.main}>

            <div className={style.image}>
                <img src="https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/LOGO.jpeg?alt=media&token=80e6906c-7e75-407a-98ee-cccbc2cec399"  />
                
            </div>

            <div className={style.link} >
                <Link to="/"><p>Home</p></Link>

                <Link to="/products"><p>Producto</p></Link>

                <Link to="/"><p>Contacto</p></Link>
            </div>

            <div className={style.input}></div>
        </div>
    )
}

export default SearchBar