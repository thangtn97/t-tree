import * as actionTypes from "./actionTypes";
import axios from "../../axios-tree";

export const fetchProducts = (productsName) => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get(`products/${productsName}.json`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => dispatch(fetchProductsFail(error)));
  };
};

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error,
  };
};
