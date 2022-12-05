import axios from 'axios'
import { GET_RECIPES, ADD_RECIPES, GET_ID_RECIPES, CLEAN_RECIPE} from "./actionsTypes";



export const getAllRecipes = ()=>{
  return async (dispatch)=>{
    const recipes = await axios.get(`${import.meta.env.VITE_URL}/recipes`)
    dispatch({
      type: GET_RECIPES,
      payload: recipes.data
    })
  }
}

export const getIdRecipes = (payload)=>{
  return async (dispatch)=>{
    const recipes = await axios.get(`${import.meta.env.VITE_URL}/recipes/id/${payload}`)
    dispatch({
      type: GET_ID_RECIPES,
      payload: recipes.data
    })
  }
}

export const addRecipes = (payload)=>{
  return async (dispatch)=>{
    const recipes = await axios.post(`${import.meta.env.VITE_URL}/recipes`, payload)
    dispatch({
      type: ADD_RECIPES,
      payload: recipes.data
    })
  } 
}

export const cleanRecipe = () => { return {type: CLEAN_RECIPE}}

