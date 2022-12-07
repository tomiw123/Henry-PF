import React from 'react'
import { Link } from 'react-router-dom'
//import style from './Recipes.module.css'



export default function CardRecipes(props){
<<<<<<< HEAD
    // console.log(props);
    return (
        // <div className={style.card}>
=======
 
   return (
        // <div classNameName={style.card}>
>>>>>>> 9a1188c081f601bddab20c2cfb927ac794f998b9
       
        // <img src={props.img} alt={props.name}  />
           
        // <h1>{props.name}</h1>
        
        //     <div classNameName="flex-auto flex space-x-4">
        //     <button classNameName={style.button}>Ver Más!</button>
   
        //     </div>
        
        // </div>


<div className="flex justify-center text-center w-80  min-h-max my-4"> 
   <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 items-center content-center bg-zinc-400 h-96 ">
<<<<<<< HEAD
=======
    <a href="">
>>>>>>> 9a1188c081f601bddab20c2cfb927ac794f998b9
    <Link to ={`/recipeDetail/${props.id}`}> 
   <img className="rounded-t-lg w-80 h-52 " src={props.img} alt=""/>
   </Link>
    <div className="p-6 h-60">

      <h5 className="text-gray-900 text-3xl font-medium mb-2 h-20 ">{props.name}</h5>

      
      <div className="flex justify-center ">
      
      <Link to ={`/recipeDetail/${props.id}`}>
      <button type="button" className=" mx-3 inline-block px-5 h-11  py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >Ver Más</button></Link>

      </div>

    </div>
  </div>
</div>

)
}