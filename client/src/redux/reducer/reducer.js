<<<<<<< HEAD
import { ADD_PRODUCTS, GET_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, GET_RECIPES, ADD_RECIPES, CHANGE_FROM_CART } from "../actions/actionsTypes";
=======
import { ADD_PRODUCTS, GET_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, GET_RECIPES, ADD_RECIPES } from "../actions/actionsTypes";

import { CHANGE_FROM_CART } from "../actions/actionsTypes";
>>>>>>> 6f8d57bcc117902eede1dbe8fdb421a085c9528b

const initialState={
products: [],
cart: [],

recipes: []
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
<<<<<<< HEAD
      case CHANGE_FROM_CART: 
        return {
          ...state,
          cart: [...state.cart.filter(p=> p.id !== action.payload.id), action.payload]
        }
=======

>>>>>>> 6f8d57bcc117902eede1dbe8fdb421a085c9528b


      case GET_RECIPES:
      return{
        ...state,
        recipes: action.payload
      }
    case ADD_RECIPES:
      return{
       ...state,
       recipes: [...state.recipes, action.payload]
      }
    

<<<<<<< HEAD
=======



    case CHANGE_FROM_CART: 
      return {
        ...state,
        cart: [...state.cart.filter(p=> p.id !== action.payload.id), action.payload]
      }
>>>>>>> 6f8d57bcc117902eede1dbe8fdb421a085c9528b
    default:
      return state
  }
}