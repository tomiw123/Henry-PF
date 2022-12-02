import { ADD_PRODUCTS, GET_PRODUCTS, GET_ID_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, GET_RECIPES, GET_ID_RECIPES, ADD_RECIPES, CLEAN_RECIPE, CLEAN_PRODUCT, CHANGE_FROM_CART, ADD_COUNT_PROD } from "../actions/actionsTypes";


const initialState={
product:[],
products: [],
cart: [],
payment: [],
recipes: [],
recipe: []
}



export function rootReducer(state=initialState, action){
  switch (action.type) {
    case GET_PRODUCTS:
      return{
        ...state,
        products: action.payload
      }
    case GET_ID_PRODUCTS:
      return{
        ...state,
        product: action.payload
      }
    case CLEAN_PRODUCT:
        return{
          ...state,
          product: []
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
    case ADD_COUNT_PROD: 
    return {
      ...state,
      // cart: [...state.cart.filter(p=> p.id !== action.payload.id), action.payload]
      cart: [...state.cart,
        state.cart[action.payload.lugar].quantity = action.payload.cantidad]
    }
    case CHANGE_FROM_CART: 
        return {
          ...state,
          cart: [...state.cart.filter(p=> p.id !== action.payload.id), action.payload]
        }
    case GET_RECIPES:
      return{
        ...state,
        recipes: action.payload
      }
    case GET_ID_RECIPES:
        
        return{
          ...state,
          recipe: action.payload
        }
    case ADD_RECIPES:
      return{
       ...state,
       recipes: [...state.recipes, action.payload]
      }
    case PAYMENT:
      return {
        ...state,
        payment: payload
      }

    case CLEAN_RECIPE:
      return{
    
        ...state,
        recipe: []
      }

    default:
      return state
  }
}