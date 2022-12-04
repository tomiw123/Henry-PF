import React from 'react';
import style from '../AdminRecipes/AdminRecipes.module.css'
import AdminRecipe from '../AdminRecipe/AdminRecipe'
import Recipes from '../../Recipes/Recipes.json'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../../redux/actions/recipesActions';
import { useEffect } from 'react';

const AdminRecipes = () => {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getAllRecipes())},[dispatch])
    const Recipes = useSelector(state => state.recipes);

    return (
        <div className={style.container}>
            {
                Recipes.map((p) => {
                    return(
                        <div key={p._id}>
                    <AdminRecipe key={p.id} name ={p.name} image={p.image} />
                    </div>
                )
            })
            }
        </div>
    );
};





export default AdminRecipes;