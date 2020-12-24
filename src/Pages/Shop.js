import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { items } from "../data/colors";

const Shop = () => {
  const { addToCart, cartItems } = useContext(cartContext);
  const [valueSearch, setValueSearch] = useState("");
  const [newColors, setNewColors] = useState(items);

  const handleItemToCart = (i) => {
    const colorExist = cartItems.find((item) => item.name === i.name);

    if (colorExist) {
      const newCart = cartItems.map((item) =>
        item.name === i.name ? { ...item, qty: item.qty + 1 } : item
      );
      addToCart([...newCart]);
    } else {
      addToCart([...cartItems, i]);
    }
  };

  const handleChange = (e) => {
    setValueSearch(e.target.value);
    setNewColors(items.filter((c) => c.name.includes(e.target.value)));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-container my-12 mx-auto px-4 md:px-12 ">
      <form className="px-6 py-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Search"
          value={valueSearch}
          onChange={handleChange}
          className=" border-2 border-black hover:bg-yellow-100"
        />
      </form>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 align-middle justify-center">
        {newColors.length === 0 ? (
          <div>
            <h1 className="text-5xl ">No Colors</h1>
            <h1 className="text-5xl py-5 px-20 transform rotate-90">:(</h1>
          </div>
        ) : (
          newColors.map((i) => (
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              key={i.name}
            >
              <article className="overflow-hidden rounded-lg shadow-lg mx-2 my-2 ">
                <div className={`bg-${i.color} py-20 px-20`}></div>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <p
                      className={`no-underline hover:text-${i.color} text-black`}
                    >
                      {i.name}
                    </p>
                  </h1>
                  <p className="text-gray-700 text-md">{i.price}€</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <button
                    onClick={() => {
                      handleItemToCart(i);
                    }}
                    className="inline-block animate-bounce px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                  >
                    Buy
                  </button>
                </footer>
              </article>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
