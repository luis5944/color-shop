import React from "react";


import useVisible from "../hooks/useVisible";
import Cart from "./Cart";

const Nav = () => {
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const handleOpenShop = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="bg-gray-900 fixed top-0 w-screen z-20">
      <div className="px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://www.flaticon.com/svg/static/icons/svg/183/183869.svg"
                alt="Workflow"
              />
            </div>
          
          </div>
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-red-300 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={handleOpenShop}
                  >
                    <img
                      className="h-8 w-8 rounded-sm"
                      src="https://image.flaticon.com/icons/png/512/126/126083.png"
                      alt=""
                    />
                  </button>
                </div>

                {isVisible && (
                  <div
                    className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 flex flex-col`}
                    role="menu"
                    ref={ref}
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Cart />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
