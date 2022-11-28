import React from 'react'
import style from './Recipes.module.css'



export default function CardRecipes(props){
    return (
        <div className={style.card}>
       
        <img src={props.img} alt={props.name}  />
           
        <h1>{props.name}</h1>
        
            <div className="flex-auto flex space-x-4">
            <button className={style.button}>Ver Más!</button>
   
            </div>
        
        </div>

)
}