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

  return Recipes.length === 0 ? (
    <Loading />
  ) : (
    <div className={style.cartita}>
      {Recipes.map((e) => {
        return (
          <Link to={`/recipeDetail/${e.id}`}>
            <CardRecipes key={e.id} name={e.name} img={e.image} />
          </Link>
        );
      })}
    </div>
  );
};


export default Recipes;
