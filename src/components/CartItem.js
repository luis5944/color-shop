import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const CartItem = ({ i }) => {
  const { deleteItemCart } = useContext(cartContext);

  const handleDelete = () => {
    deleteItemCart(i);
  };

  return (
    <li className="border-2 rounded px-1 py-1 flex flex-col my-1">
      <div className={`bg-${i.color} py-4 px-4`}></div>
      {/* {`${i.name} - ${i.qty}`} */}
      <div className="flex justify-between">
        <span>{`Color: ${i.name}`}</span>
        <span>{`Quantity: ${i.qty}`}</span>
      </div>

      <button
        className="self-end bg-red-500 py-2- px-2 rounded hover:bg-red-300"
        onClick={handleDelete}
      >
        X
      </button>
    </li>
  );
};

export default CartItem;
