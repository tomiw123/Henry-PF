import axios from 'axios'
import { GET_PRODUCTS, ADD_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, CHANGE_FROM_CART } from "./actionsTypes";



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

export const addToCart = (payload)=> {
  return {
    type: ADD_PRODUCTS_CART,
    payload: payload,
  }
}

export const deleteFromCart = (payload)=> {
  return {
    type: DELETE_PRODUCTS_CART,
    payload: payload,
  }
}

export const changeFromCart = (payload)=> {
  return {
    type:  CHANGE_FROM_CART,
    payload
  }
}
