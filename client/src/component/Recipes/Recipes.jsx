import React from "react";
import RecipesJson from "./Recipes.json";
import CardRecipes from "./CardRecipes/CardRecipes";
import style from "./Recipe.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Recipes = () => {
  return RecipesJson.length === 0 ? (
    <Loading />
  ) : (
    <div className={style.cartita}>
      {RecipesJson.map((e) => {
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
