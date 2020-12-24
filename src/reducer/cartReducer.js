import { DELETE_ITEM_CART, GET_CART } from "../constants/actionTypes";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
      case DELETE_ITEM_CART:
        return {...state, cartItems: state.cartItems.filter((item) => item !== action.payload)}

    default:
      break;
  }
};
