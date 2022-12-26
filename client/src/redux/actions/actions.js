import axios from 'axios';

import { GET_PRODUCTS,GET_ALL_PRODUCTS, GET_ID_PRODUCTS, ADD_PRODUCTS, ADD_PRODUCTS_CART, DELETE_PRODUCTS_CART, CHANGE_FROM_CART, CLEAN_PRODUCT, ADD_COUNT_PROD, GET_ALL_FILTERS, UPDATE_PRODUCT, USER_PAYMENTS, DELETE_PRODUCT_ADMIN, CREATE_REVIEW, CLEAN_CART, BORRADOR, BORRADOR_VUELTA, MESSAGE_1, MESSAGE_2} from "./actionsTypes";


export const geTAllProducts = (page) => {
  return async (dispatch) => {
    const products = await axios.get(`${import.meta.env.VITE_URL}/products?page=${page}`)
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
    // console.log(products);
  };
};

export const getAll = (name)=> {
  return async (dispatch)=>{

    const products = await axios.get(`${import.meta.env.VITE_URL}/products?search=${name}`)
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data,
    });
    // console.log(products);
  };
}

export const getAllFilters = (filter,valor,page)=> {
  return async (dispatch)=>{
    const products = await axios.get(`${import.meta.env.VITE_URL}/products/filter?filter=${filter}&${filter}=${valor}&page=${page}`);
    dispatch({
      type: GET_ALL_FILTERS,
      payload:[products.data, filter, valor, page]
    });
    // console.log(products);
  };
}
export const getIdProducts = (payload) => {
  return async (dispatch) => {
    const products = await axios.get(`${import.meta.env.VITE_URL}/products/id/${payload}`)
    dispatch({
      type: GET_ID_PRODUCTS,
      payload: products.data,
    });
  };
};
export const cleanProduct = () => {
  return { type: CLEAN_PRODUCT };
};

export const addProducts = (payload) => {
  return async (dispatch) => {
    const products = await axios.post(`${import.meta.env.VITE_URL}/products`, payload)
    dispatch({
      type: ADD_PRODUCTS,
      payload: products.data,
    });
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_PRODUCTS_CART,
    payload: payload,
  };
};

export const deleteFromCart = (payload) => {
  return {
    type: DELETE_PRODUCTS_CART,
    payload: payload,
  };
};

export const changeFromCart = (payload) => {
  return {
    type: CHANGE_FROM_CART,
    payload
  }
}
export const cleanCart = ()=> {
  return {
    type: CLEAN_CART
  }
}
export const adminDeleteProduct = (payload) => {
  return async (dispatch) => {
    const response = await axios.delete(`${import.meta.env.VITE_URL}/products/${payload}`)
    dispatch({
      type: DELETE_PRODUCT_ADMIN,
      payload: response.data
    })
  }

}

export const updateProduct = (payload, id) => {
  return async (dispatch) => {
    console.log(payload)
    const response = await axios.put(`${import.meta.env.VITE_URL}/products/update/${id}`, payload)
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response.data
    })
  }
}

export const addCount = (payload) => {
  return {
    type: ADD_COUNT_PROD,
    payload
  }
}

export const payment = (payload) => {
  console.log(payload)
  return async function () {
    try {
      const pago = await axios.post(`${import.meta.env.VITE_URL}/payments`, payload)
      return pago.data
    } 
    catch (error) {
      return error.response.data
    }
  }}


  export const userPayments = (payload) => {
    return async function() {
      try {
        const payment = await axios.post(`${import.meta.env.VITE_URL}/payments/pagoExitoso`, payload)
        return payment.data
      } 
      catch (error) {
        return error.response.data
      }
  }
}

  
export const totalPayment = () => {
  return async (dispatch)=>{
    const total = await axios.get(`${import.meta.env.VITE_URL}/payments/totalVentas`)
      dispatch({
        type: USER_PAYMENTS,
        payload: total.data,
      });
  };
};


export const createProductReview =
  (productId, review) => async (dispatch) => {
    try {
      const product = await axios.post(`${import.meta.env.VITE_URL}/products/${productId}/review`, review)
      dispatch({ type: CREATE_REVIEW, payload: product.data})
    } catch (err) {
      console.log(err);
    }
  }


export const messege_1 = (payload) => {
  return async (dispatch)=>{
    const messege = await axios.post(`${import.meta.env.VITE_URL}/notificaciones`, payload)
      dispatch({
        type: MESSAGE_1,
        payload: messege.data,
      });
  };
};

export const messege_2 = (payload) => {
  return async (dispatch)=>{
    const messege = await axios.post(`${import.meta.env.VITE_URL}/notificaciones/envio`, payload)
      dispatch({
        type: MESSAGE_2,
        payload: messege.data,
      });
  };
};

export const borrador = ()=> {
  return {
    type: BORRADOR
  }
}

export const borradorVuelta = ()=> {
  return {
    type: BORRADOR_VUELTA
  }
}

export const estadoEnvio = (payload) => {
  console.log(payload);
  return async ()=>{
    await axios.put(`${import.meta.env.VITE_URL}/payments/estado/${payload}`)

  };
};