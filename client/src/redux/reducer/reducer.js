import { ADD_PRODUCTS, GET_PRODUCTS } from "../actions/actionsTypes";

const initialState={
products: []
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

    default:
      return state
  }
}