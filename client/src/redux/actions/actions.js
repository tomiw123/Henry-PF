import axios from 'axios'
import { GET_PRODUCTS, GET_ID_PRODUCTS, ADD_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, CHANGE_FROM_CART, CLEAN_PRODUCT, DELETE_PRODUCT_ADMIN} from "./actionsTypes";



export const geTAllProducts = ()=>{
  return async (dispatch)=>{
    const products = await axios.get(`http://localhost:3001/products`)
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data
    })
    
  }
}

export const getIdProducts = (payload)=>{
  return async (dispatch)=>{
    const products = await axios.get(`http://localhost:3001/products/id/${payload}`)
    dispatch({
      type: GET_ID_PRODUCTS,
      payload: products.data
    })
  }
}
export const cleanProduct = () => { return {type: CLEAN_PRODUCT}}

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

export const adminDeleteProduct = (payload) => {
  return async (dispatch)=> {
    const response = await axios.delete(`http://localhost:3001/products/${payload}`)
    dispatch({
      type: DELETE_PRODUCT_ADMIN,
      payload: response.data
    })
  }

}

