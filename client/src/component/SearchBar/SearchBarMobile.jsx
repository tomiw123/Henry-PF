import React, { useState } from "react";
import SearchBarLink from "./SearchBarLink";
import style from "./SearchBar.module.css";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

const SearchBarMobile = () => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <VscMenu
      className={style.burger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeBurger = (
    <GrClose
      className={style.burger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = ()=> setOpen(false)

  return( 
  <div className={style.mobile}>
    {open ? closeBurger : burgerIcon}
    {open && <SearchBarLink isMobile={true} closeMobileMenu={closeMobileMenu} />}
  </div>)
};

export default SearchBarMobile;
