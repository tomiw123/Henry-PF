import React from 'react'
import style from './Card.module.css'


export default function Card(props){
    return (
        <div className={style.card}>
       
        <img src={props.img} alt={props.name}  />
           
        <h1>{props.name}</h1>
        
        <h2>${props.precio}</h2>

            <div className="flex-auto flex space-x-4">
            <button className={style.button}>Comprar Ahora!</button>
           
           
            </div>
        
        </div>
    )
}