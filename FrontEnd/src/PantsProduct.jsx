import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OfferHeading from "./OfferHeading";
import Navbar from "./Navbar";

const PantsProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pants, setPants] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const userId = 1;
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = (productId, quantity) => {
    axios
      .post("http://localhost:3000/cart", {
        userId,
        productId,
        quantity,
      })
      .then((res) => {
        console.log(res);
      });
    navigate("/cart");
  };
  useEffect(() => {
    axios.get("http://localhost:3000/products/pant/" + id).then((res) => {
      console.log(res);
      setPants(res.data);
    });
  }, [id]);
  return (
    <>
      <div className="">
        <OfferHeading />
      </div>
      <Navbar />
      <div className="grid lg:grid-cols-2 ">
        <div className=" md:ml-12 mt-9 ">
          <img
            src={pants.image}
            alt=""
            className="rounded-lg lg:w-[520px] lg:h-[520px] md:ml-16 md:w-[520px] md:h-[550px] w-[420px] m-auto"
          />
        </div>
        <div className="mt-9 flex flex-col items-start ml-2">
          <h1 className="font-bold text-5xl md:ml-20">{pants.name}</h1>
          <p className="text-xl mt-4 font-normal md:ml-20">
            Rs. {pants.price}.00
          </p>

          <div>
            <p className="text-gray-500 mt-4 md:ml-20">Quantity:</p>
            <div className="flex gap-7 border-2 w-[150px] justify-center p-3 font-bold text-lg mt-4  md:ml-20 cursor-pointer">
              <span onClick={decrement}>-</span> <p>{quantity}</p>{" "}
              <span onClick={increment}>+</span>
            </div>
          </div>

          <div>
            <button
              onClick={() => addToCart(pants.id, 1)}
              className="bg-black md:ml-20 text-white p-4 rounded-md md:w-[520px] mt-8 font-bold w-[300px] ml-8"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PantsProduct;
