import axios from 'axios'
import { GET_RECIPES, ADD_RECIPES, GET_ID_RECIPES, CLEAN_RECIPE} from "./actionsTypes";



export const getAllRecipes = ()=>{
  return async (dispatch)=>{
    const recipes = await axios.get(`http://localhost:3001/recipes`)
    dispatch({
      type: GET_RECIPES,
      payload: recipes.data
    })
  }
}

export const getIdRecipes = (payload)=>{
  return async (dispatch)=>{
    const recipes = await axios.get(`http://localhost:3001/recipes/id/${payload}`)
    dispatch({
      type: GET_ID_RECIPES,
      payload: recipes.data
    })
  }
}

export const addRecipes = (payload)=>{
  return async (dispatch)=>{
    const recipes = await axios.post(`http://localhost:3001/recipes`, payload)
    dispatch({
      type: ADD_RECIPES,
      payload: recipes.data
    })
  } 
}

export const cleanRecipe = () => { return {type: CLEAN_RECIPE}}
