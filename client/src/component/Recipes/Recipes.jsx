import React from 'react'
import style from './Recipes.module.css'
//import Recipes from "./Recipes.json"




const Recipes = (props) => {
    //  console.log('aa')
  
    return (

        <div className={style.card}>
       
        <img src={props.image} alt={props.name}  />
           
        <h1>{props.name}</h1>
        

            <div className="flex-auto flex space-x-4">
            <button className={style.button}>Ver Más!</button>
           
           
            </div>
          
        
        </div>
      
      
    )
}

export default Recipes

