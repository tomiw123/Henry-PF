import React from 'react'
import style from './Card.module.css'


export default function Card(props){
    return (
        <div className={style.card}>
       
        <img src={props.img} alt={props.name}  />
           
        <h1>{props.name}</h1>
        
        <h3>${props.precio}</h3>
        
      </div>
    )
}