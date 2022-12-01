import { ADD_PRODUCTS, GET_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, GET_RECIPES, ADD_RECIPES } from "../actions/actionsTypes";

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
    



    default:
      return state
  }
}