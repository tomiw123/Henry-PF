
import { ADD_PRODUCTS, GET_PRODUCTS,GET_ALL_PRODUCTS, GET_ID_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, GET_RECIPES, GET_ID_RECIPES,GET_RECIPES_NAME, ADD_RECIPES, CLEAN_RECIPE, CLEAN_PRODUCT, CHANGE_FROM_CART, ADD_COUNT_PROD, DELETE_PRODUCT_ADMIN, DELETE_RECIPE_ADMIN, GET_ALL_FILTERS } from "../actions/actionsTypes";




const initialState = {
  product: [],
  products: [],
  productsFilter: [],
  cart: [window.localStorage.getItem('cart')],
  //payment: [],
  recipes: [],
  recipe: [],
  loaderProducts: true
}



export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loaderProducts: false
      };
    case GET_ALL_PRODUCTS: 
      return {
        ...state, 
        products: action.payload
      };
      case GET_ALL_FILTERS: 
      return {
        ...state, 
        products: action.payload
      };

    case GET_ID_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case CLEAN_PRODUCT:
      return {
        ...state,
        product: [],
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCTS_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
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
        cart: [...state.cart.filter(p => p.id !== action.payload.id), action.payload]
      }
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPES_NAME:
      return {
        ...state,
        recipes: action.payload,
      } 
    case GET_ID_RECIPES:
      return {
        ...state,
        recipe: action.payload
     }
    case ADD_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }

    case CLEAN_RECIPE:
      return {
        ...state,
        recipe: [],
      };

    case DELETE_PRODUCT_ADMIN:
      return {
        ...state,
        products: [...state.products.filter(p => p.id !== action.payload)]
      }

      case DELETE_RECIPE_ADMIN:
      return {
        ...state,
        recipes: [...state.recipes.filter(p => p.id !== action.payload)]
      }

    default:
      return state;
  }
}
