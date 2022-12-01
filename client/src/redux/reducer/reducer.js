import { ADD_PRODUCTS, GET_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, CHANGE_FROM_CART } from "../actions/actionsTypes";

const initialState={
products: [],
cart: []
}



export function rootReducer(state=initialState, action){
  switch (action.type) {
    case GET_PRODUCTS:
      return{
        ...state,
        products: action.payload
      }
    case ADD_PRODUCTS:
      return{
       ...state,
      products: [...state.products, action.payload]
      }
    case ADD_PRODUCTS_CART: 
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case DELETE_PRODUCTS_CART:
      return {
        ...state,
        cart: [...state.cart.filter(p => p.id !== action.payload)]
      }
    case CHANGE_FROM_CART: 
      return {
        ...state,
        cart: [...state.cart.filter(p=> p.id !== action.payload.id), action.payload]
      }
    default:
      return state
  }
}