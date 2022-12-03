import axios from 'axios'
import { GET_PRODUCTS, GET_ID_PRODUCTS, ADD_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, CHANGE_FROM_CART, CLEAN_PRODUCT, ADD_COUNT_PROD} from "./actionsTypes";



export const geTAllProducts = ()=>{
  return async (dispatch)=>{
    const products = await axios.get(`${import.meta.env.VITE_URL}/products`)
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data
    })
    
  }
}

export const getIdProducts = (payload)=>{
  return async (dispatch)=>{
    const products = await axios.get(`${import.meta.env.VITE_URL}/products/id/${payload}`)
    dispatch({
      type: GET_ID_PRODUCTS,
      payload: products.data
    })
  }
}
export const cleanProduct = () => { return {type: CLEAN_PRODUCT}}

export const addProducts = (payload)=>{
  return async (dispatch)=>{
    const products = await axios.post(`${import.meta.env.VITE_URL}/products`, payload)
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

export const addCount = (payload) => {
  return {
    type: ADD_COUNT_PROD,
    payload
  }
}

export const payment = (payload) => {
  return async function() {
    try {
      const pago = await axios.post(`${import.meta.env.VITE_URL}/payments`, payload)
      return pago.data
    } catch (error) {
      return error.response.data
    }
  }}