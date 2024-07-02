import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OfferHeading from "./OfferHeading";
import Navbar from "./Navbar";

const NewProductDetails = () => {
  const { id } = useParams();
  const [newProducts, setNewProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/newproducts/${id}`).then((res) => {
      console.log(res.data);
      setNewProducts(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="">
        <OfferHeading />
      </div>
      <Navbar />
      <div className="grid lg:grid-cols-2">
        <div className=" md:ml-12 mt-9  ">
          <img
            src={newProducts.image}
            alt=""
            className="rounded-lg lg:w-[520px] lg:h-[520px] md:ml-16 md:w-[520px] md:h-[550px] sm:m-auto sm:w-[320px]"
          />
        </div>
        <div className="mt-9">
          <h1 className="font-bold text-5xl md:ml-20">{newProducts.name}</h1>
          <p className="text-xl mt-4 font-normal md:ml-20">
            Rs. {newProducts.price}.00
          </p>

          <div>
            <p className="text-gray-500 mt-4 md:ml-20">Quantity:</p>
            <div className="flex gap-7 border-2 w-[150px] justify-center p-3 font-bold text-lg mt-4 md:ml-20">
              <span onClick={decrement}>-</span> <p>{quantity}</p>{" "}
              <span onClick={increment}>+</span>
            </div>
          </div>

          <div>
            <button className="bg-black text-white p-4 rounded-md w-[520px] mt-8 font-bold md:ml-20">
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

export default NewProductDetails;
