import React, { useReducer } from "react";
import { createContext } from "react";
import { DELETE_ITEM_CART, GET_CART } from "../constants/actionTypes";
import { cartReducer } from "../reducer/cartReducer";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: GET_CART,
      payload: item,
    });
  };

  const deleteItemCart = (item) => {
    dispatch({
      type: DELETE_ITEM_CART,
      payload: item,
    });
  };

  return (
    <cartContext.Provider
      value={{ cartItems: state.cartItems, addToCart, deleteItemCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
