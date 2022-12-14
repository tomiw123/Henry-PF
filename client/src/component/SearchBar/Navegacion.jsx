import React from 'react'
import SearchBarLink from './SearchBarLink'
import style from "./SearchBar.module.css";

const Navegacion = () => {
  return (
    <div className={style.navegacion}>
      <SearchBarLink/>
    </div>
  )
}

export default Navegacion