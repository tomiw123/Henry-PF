import React, { useState, useEffect, Fragment } from 'react'
import style from './RecipeDetail.module.css'

import RecipesJson from '../Recipes/Recipes.json'
import { useParams } from 'react-router-dom';


const RecipeDetail = () => {

  const paramsId = useParams()
  let recipeFiltered;
  let recipesId = RecipesJson.map((p) => {
    if (p.id === paramsId.id) {
        recipeFiltered = p;
      return recipeFiltered;
    }
  })


 
  return (
      <div className={style.card}>
        <div className={style.title}>
          <h1 >{recipeFiltered.name}</h1>
        </div>
        <div className={style.content}>
          <div className={style.image}>
            <img src={recipeFiltered.image} alt={recipeFiltered.name}/>
          </div>
          <div className={style.ingredients}>
            <h1>Igredientes:</h1>
            {
              recipeFiltered.ingredients.map((i)=>{
                return(
                  <li className={style.ingredient}>{i}</li>
                )
              })
            }
          </div>
        </div>  
        <div className={style.description}>
          <h1>Paso a Paso</h1>
          <h3>{recipeFiltered.description}</h3>
        </div>             
      </div>      
  )
 }

export default RecipeDetail