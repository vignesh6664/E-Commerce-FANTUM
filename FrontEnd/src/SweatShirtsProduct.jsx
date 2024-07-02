import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OfferHeading from "./OfferHeading";
import Navbar from "./Navbar";

const SweatShirtsProduct = () => {
  const { id } = useParams();
  const [sweatshirts, setSweatShirts] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/sweatshirts/" + id).then((res) => {
      console.log(res.data);
      setSweatShirts(res.data);
    });
  }, []);
  return (
    <>
      <OfferHeading />
      <Navbar />
      <div className="grid lg:grid-cols-2">
        <div className=" md:ml-12 mt-9 ">
          <img
            src={sweatshirts.image}
            alt=""
            className="rounded-lg lg:w-[520px] lg:h-[520px] md:ml-16 md:w-[520px] md:h-[550px] sm:m-auto sm:w-[320px]"
          />
        </div>
        <div className="mt-9">
          <h1 className="font-bold text-5xl md:ml-20">{sweatshirts.name}</h1>
          <p className="text-xl mt-4 font-normal md:ml-20">
            Rs. {sweatshirts.price}.00
          </p>

          <div>
            <p className="text-gray-500 mt-4 md:ml-20">Quantity:</p>
            <div className="flex gap-7 border-2 md:ml-20 w-[150px] justify-center p-3 font-bold text-lg mt-4">
              <span onClick={decrement}>-</span> <p>{quantity}</p>{" "}
              <span onClick={increment}>+</span>
            </div>
          </div>

          <div>
            <button className="bg-black md:ml-20 text-white p-4 rounded-md w-[520px] mt-8 font-bold">
            <Link to="/cart">
              Add to Bag
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SweatShirtsProduct;
