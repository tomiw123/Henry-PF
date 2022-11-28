import React from 'react'
import RecipesJson from "./Recipes.json"
import CardRecipes from "./CardRecipes/CardRecipes"
import style from './Recipe.module.css'




const Recipes = () => {
  
    return (
            
        <div className={style.cartita} >
       {
        RecipesJson.map((e)=>{
            return(
                <CardRecipes 
                key={e.id}
                name= {e.name}
                img= {e.image}
                />
            )
        }
        )
       }
           
         </div>
          
 
    )
}

export default Recipes

