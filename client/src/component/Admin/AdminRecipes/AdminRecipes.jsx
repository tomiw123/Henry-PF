import React from 'react';
import style from '../AdminRecipes/AdminRecipes.module.css'
import AdminRecipe from '../AdminRecipe/AdminRecipe'
//import Recipes from '../../Recipes/Recipes.json'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../../redux/actions/recipesActions';
import { useEffect } from 'react';
import Paginado from "../../Paginado/Paginado";

const AdminRecipes = () => {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getAllRecipes())},[dispatch])
    const Recipes = useSelector(state => state.recipes.docs);
    const recipes = useSelector(state => state.recipes);
    console.log(Recipes);
    return (
        <div className={style.container}>
            {
                Recipes?.map((p) => {
                    return(
                
                    <AdminRecipe key={p.id} name ={p.name} image={p.image} />
                    
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