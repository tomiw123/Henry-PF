import { GET_PRODUCTS } from "./actionsTypes"



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
      type: GET_PRODUCTS,
      payload: products.data
    })
  } 
}