<<<<<<< HEAD
import { ADD_PRODUCTS, GET_PRODUCTS } from "./actionsTypes"
=======
import axios from 'axios'
import { GET_PRODUCTS, ADD_PRODUCTS } from "./actionsTypes";
>>>>>>> de85cdafc74b62165de97a9e0284deb49e7834dc



export const geTAllProducts = ()=>{
  return async (dispatch)=>{
    const products = await axios.get(`http://localhost:3001/products`)
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data
    })
  }
}

export const addProducts = (payload)=>{
  return async (dispatch)=>{
    const products = await axios.post(`http://localhost:3001/products`, payload)
    dispatch({
      type: ADD_PRODUCTS,
      payload: products.data
    })
  } 
}