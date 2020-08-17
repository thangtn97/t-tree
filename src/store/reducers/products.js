import * as actionTypes from "../actions/actionTypes";
const productsState = {
  products: null,
  error: null,
  loading: false,
};

const reducer = (state = productsState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
      };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };

    case action.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
