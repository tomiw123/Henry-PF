import React from "react";
import style from "../AdminRecipes/AdminRecipes.module.css";
import AdminRecipe from "../AdminRecipe/AdminRecipe";
//import Recipes from '../../Recipes/Recipes.json'
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../../redux/actions/recipesActions";
import { useEffect } from "react";
import Paginado from "../../Paginado/Paginado";
import { Link } from "react-router-dom";

const AdminRecipes = () => {
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(getAllRecipes())},[dispatch])

    const Recipes = useSelector(state => state.recipes.docs);
    const recipes = useSelector(state => state.recipes);
   // console.log(Recipes);
    return (
        <div className={style.container}>

            <Link to='/HAdmin'>
            <button className="group bg-green-600
            relative flex-items-center w-48 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  mb-4 ">Volver</button></Link>

            {
                Recipes?.map((p) => {
                    console.log(p);
                    return(
                        
                    <AdminRecipe id={p._id} key={p._id} name ={p.name} image={p.image} />
                    
                )
            })
            }
            <div className={style.paginado}>
            <Paginado recipes={recipes} />
            </div>
        </div>
    );
};


export default AdminRecipes;
