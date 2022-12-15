import React, { useState } from "react";
import s from "./BusquedaProducts.module.css";
import { useDispatch } from "react-redux";
import { getAll, geTAllProducts } from "../../redux/actions/actions";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { IconContext } from "react-icons/lib";

const BusquedaProducts = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    if (e.target.value === "") {
      clearInput();
    }
    setInput(e.target.value);
    // console.log(input)
  };
  const submit = (event) => {
    event.preventDefault();
    dispatch(getAll(input));
    setInput("");
  };

  const clearInput = () => {
    dispatch(geTAllProducts());
    
  };
  return (
    <form onSubmit={(e) => submit(e)}>
      <div className={s.search}>
        <div className={s.test}>
        <input
          type="text"
          name="Search"
          placeholder="Search..."
          value={input}
          onChange={(e) => inputHandler(e)}
          autoComplete="off"
        />
        <IconContext.Provider value={{size: "30px"}}>
        <AiOutlineCloseCircle  onClick={() => clearInput()}>
        </AiOutlineCloseCircle>
        </IconContext.Provider>
        </div>

    <div className={s.test2}>
        <button className={s.submit}>
          Search
        </button>
    </div>
      </div>
    </form>
  );
};

export default BusquedaProducts;
