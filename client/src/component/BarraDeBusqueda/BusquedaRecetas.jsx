import React from "react";
import { useState } from "react";
import s from './BusquedaRecetas.module.css'
import {useDispatch } from "react-redux";
import { getAllRecipes, getByName } from "../../redux/actions/recipesActions";


const BusquedaRecetas = ()=> {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        if(e.target.value === ''){
            clearInput()
        }
            setInput(e.target.value);
        // console.log(input)
      };
    const submit = ()=> {
        dispatch(getByName(input));
    }
    
    const handleSubmit = (event)=>  {
        event.preventDefault();
      }
    const clearInput = ()=> {
        dispatch(getAllRecipes())
        setInput('')
    }
    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className={s.search}>
                <input type="text" name="Search" placeholder='Search...' className={s.input} value={input} onChange={(e) => inputHandler(e) }/>
                <button className={s.button} onClick={()=> clearInput()}>X</button>
                <button className={s.submit} onClick={()=> {submit()}}>Search</button>
            </div>
        </form>
    )
}

export default BusquedaRecetas;