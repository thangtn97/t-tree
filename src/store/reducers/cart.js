import * as actionTypes from "../actions/actionTypes";
const cartState = {
  products: [],
};

const reducer = (state = cartState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      return {
        ...state,
        products: [...state.products, action.product],
      };
    }
    default:
      return state;
  }
};

export default reducer;
