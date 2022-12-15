
import React, { useEffect, Fragment, useState } from 'react'
import style from './RecipeDetail.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIdRecipes, cleanRecipe } from '../../redux/actions/recipesActions.js' ;

import Carrousel from './Carrousel/CarrouselRecipe';
import { Oval  } from 'react-loader-spinner'


const RecipeDetail = () => {
  const dispatch = useDispatch();
  const paramsId = useParams();
  const Recipes = useSelector((state) => state.recipe);
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 800);

  useEffect(() => {
    if (Recipes.length === 0) {
      dispatch(getIdRecipes(paramsId.id));
    } else {
      if (Recipes.id !== paramsId.id) {
        dispatch(cleanRecipe());
        dispatch(getIdRecipes(paramsId.id));
      }
    }
  }, [dispatch, paramsId.id]);

   //console.log(Recipes)

  return (

      <div className={style.card}>
        <div className={style.title}>
          <h1 >{Recipes.name}</h1>
        </div>
        <div className={style.content}>
          <div className={style.image}>

            {/* <img className={style.image} src={Recipes.image} alt={Recipes.name}/> */}
          

            {loader? (
                <Oval
                  height={100}
                  width={300}
                  color="black"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="black"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
                ): (
              //  <img className={style.image} src={Recipes.image} alt={Recipes.name}/>
              <Carrousel 
          image = {Recipes.image}
          />
              )}

          </div>
          <div className={style.ingredients}>
            <h1>Igredientes:</h1>
            {
              Recipes.ingredients?.map((i)=>{
                return(
                  <li className={style.ingredient}>{i}</li>
                )
              })
            }
          </div>
        </div>  
        <div className={style.description}>
          <h1>Paso a Paso</h1>
          <h3>{Recipes.description}</h3>
        </div>             
      </div>      
  )
 }


export default RecipeDetail;
