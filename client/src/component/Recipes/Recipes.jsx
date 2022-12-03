import React from "react";
import RecipesJson from "./Recipes.json";
import CardRecipes from "./CardRecipes/CardRecipes";
import style from "./Recipe.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from 'react-redux';
import {getAllRecipes} from '../../redux/actions/recipesActions'
import { useEffect } from "react";

const Recipes = () => {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getAllRecipes())},[dispatch])
    const Recipes = useSelector(state => state.recipes);
    console.log(Recipes);

  // return Recipes.length === 0 ? (
    // <Loading />
  // ) : 
  return (
    <div className={style.cartita}>
      {Recipes.map((e) => {
        return (
          <div key={e._id}>
            <Link to={`/recipeDetail/${e._id}`}>
            <CardRecipes key={e.id} name={e.name} img={e.image} />
            </Link>
          </div>
          
        )
      })}
    </div>
  );
};


export default Recipes;
