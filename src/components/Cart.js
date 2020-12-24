import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(cartContext);

  const getPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return (
    <div className="flex flex-col">
      <ul className="mx-2">
        {cartItems.length !== 0 ? (
          cartItems.map((i) => {
            return (
              <div key={i.name}>
                <CartItem i={i} />
              </div>
            );
          })
        ) : (
          <p>No Items</p>
        )}
      </ul>

      <p className="self-end mx-2">{`Total price: ${getPrice}€`}</p>
    </div>
  );
};

export default Cart;
