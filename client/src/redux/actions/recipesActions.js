import axios from 'axios'
import { GET_RECIPES, ADD_RECIPES} from "./actionsTypes";



export const geTAllProducts = ()=>{
  return async (dispatch)=>{
    const recipes = await axios.get(`http://localhost:3001/recipes`)
    dispatch({
      type: GET_RECIPES,
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

