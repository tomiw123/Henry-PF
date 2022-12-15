import React from "react";
import CardRecipes from "./CardRecipes/CardRecipes";
import style from "./Recipe.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getAllRecipes} from '../../redux/actions/recipesActions'
import { useEffect } from "react";
import Paginado from "../Paginado/Paginado";
import BusquedaRecetas from "../BarraDeBusqueda/BusquedaRecetas";

const Recipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes(1));
  }, [dispatch]);
  const Recipes = useSelector((state) => state.recipes.docs);
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className={style.cartita}>
      <div className={style.filtros}>
      <BusquedaRecetas />
      </div>
      <div className={style.recetas}>
        {Recipes?.map((e) => {
          return (
            <div key={e._id}>
              {/* <Link to={`/recipeDetail/${e._id}`}> */}
                <CardRecipes id={e._id} name={e.name} img={e.image} />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      <div className={style.paginado}>
      <Paginado recipes={recipes} />
      </div>
    </div>
  );
};

export default Recipes;
