import axios from 'axios'
import { GET_RECIPES, ADD_RECIPES, GET_ID_RECIPES, CLEAN_RECIPE, DELETE_RECIPE_ADMIN, UPDATE_RECIPE, GET_RECIPES_NAME} from "./actionsTypes";


export const getAllRecipes = (page)=>{
  
  return async (dispatch)=>{
    const recipes = await axios.get(`${import.meta.env.VITE_URL}/recipes?page=${page}`)
    dispatch({
      type: GET_RECIPES,
      payload: recipes.data
    })
  }
}
export const getByName = (name)=> {
    return async (dispatch)=>{
      const products = await axios.get(`${import.meta.env.VITE_URL}/recipes?search=${name}`)
      dispatch({
        type: GET_RECIPES_NAME,
        payload: products.data,
      });
    };
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

export const adminDeleteRecipe = (payload) => {
  console.log(payload)
  return async (dispatch)=> {
    const response = await axios.delete(`${import.meta.env.VITE_URL}/recipes/${payload}`)
    dispatch({
      type: DELETE_RECIPE_ADMIN,
      payload: response.data
    })
  }

}


export const updateRecipe = (payload, id) => {
  return async (dispatch) => {
    console.log(payload)
    const response = await axios.put(`${import.meta.env.VITE_URL}/recipes/${id}`, payload)

    dispatch({
      type: UPDATE_RECIPE,
      payload: response.data
    })
  }
}



export const cleanRecipe = () => { return {type: CLEAN_RECIPE}}

