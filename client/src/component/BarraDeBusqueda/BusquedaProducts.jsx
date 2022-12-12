import React ,{ useState } from "react";
import s from './BusquedaProducts.module.css'
import {useDispatch } from "react-redux";
import { getAll, geTAllProducts } from "../../redux/actions/actions";


const BusquedaProducts = ()=> {
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
        dispatch(getAll(input));
    }
    const handleSubmit = (event)=>  {
        event.preventDefault();
      }
    const clearInput = ()=> {
        dispatch(geTAllProducts())
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

export default BusquedaProducts;