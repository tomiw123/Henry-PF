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
     <div className={style.contenedor}>
            <div className={style.card}>
                <h1 className={style.title}>{recipeFiltered.name}</h1>

                <img src={recipeFiltered.image} alt={recipeFiltered.name} className={style.image}/>


                <h2 className={style.content}>Utensilios: {recipeFiltered.Utensilios}</h2>

                <h2 className={style.content}>Ingredientes: {recipeFiltered.ingredients}</h2>

                <h3 className={style.content}>Descripción: {recipeFiltered.description}</h3>
                
            </div>
     </div>
        
  )
 }

export default RecipeDetail