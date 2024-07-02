import axios from "axios";
import React, { useEffect, useState } from "react";
import OfferHeading from "./OfferHeading";
import Navbar from "./Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const userId = 1;
  useEffect(() => {
    axios.get(`http://localhost:3000/cart/${userId}`).then((res) => {
      console.log(res.data);
      setCart(res.data);
    });
  }, []);

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("cart"));
  //   if (savedCart) {
  //     setCart(savedCart);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);
  const removeCartItem = (id) => {
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then(setCart(cart.filter((item) => item.id !== id)));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <OfferHeading />
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Your Items</h1>
        <hr className="h-2 -mt-2 bg-black w-24 rounded-lg m-auto" />
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4 flex items-center justify-between border-b">
              {/* <div>
                <img src={item.image} alt="" />
              </div> */}
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">Price : {item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={decrement}
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  -
                </button>
                <p className="mx-4">{quantity}</p>
                <button
                  onClick={increment}
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeCartItem(item.id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">
            Total: {getTotalPrice().toFixed(2)}
          </h2>
          <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
