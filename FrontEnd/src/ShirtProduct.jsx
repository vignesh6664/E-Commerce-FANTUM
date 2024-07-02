import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OfferHeading from "./OfferHeading";
import Navbar from "./Navbar";

const ShirtProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = 1;
  const [shirts, setShirts] = useState([]);

  const [quantity, setQuantity] = useState(1);

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
    axios.get("http://localhost:3000/products/shirt/" + id).then((res) => {
      console.log(res.data);
      setShirts(res.data);
    });
  }, [id]);
  return (
    <>
      <OfferHeading />
      <Navbar />
      <div className="grid md:grid-cols-2">
        <div className=" md:ml-12 mt-9 ">
          <img
            src={shirts.image}
            alt=""
            className="rounded-lg md: w-[520px] md:h-[540px] "
          />
        </div>
        <div className="mt-9">
          <h1 className="font-bold text-5xl">{shirts.name}</h1>
          <p className="text-xl mt-4 font-normal">Rs. {shirts.price}.00</p>

          <div>
            <p className="text-gray-500 mt-4">Quantity:</p>
            <div className="flex gap-7 border-2 w-[150px] justify-center p-3 font-bold text-lg mt-4">
              <span onClick={decrement}>-</span> <p>{quantity}</p>{" "}
              <span onClick={increment}>+</span>
            </div>
          </div>

          <div>
            <button
              onClick={() => addToCart(shirts.id, userId)}
              className="bg-black text-white p-4 rounded-md w-[520px] mt-8 font-bold"
            >
              <Link to="/cart">Add to Bag</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShirtProduct;
