import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import OfferHeading from "./OfferHeading";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/shirt`).then((res) => {
      console.log(res.data);
      setShirts(res.data);
    });
  }, []);
  return (
    <div>
      <OfferHeading />
      <Navbar />
      <h1 className="flex justify-center font-bold text-6xl mt-20">Shirts</h1>
      <hr className="h-2 mt-2 bg-black w-24 rounded-lg m-auto" />
      <div>
        <div className="grid md:grid-cols-4 m-auto ">
          {shirts.map((item) => (
            <div key={item.id} className="ml-5 mt-4">
              <Link to={`/shirt/${item.id}`}>
                {" "}
                <img
                  src={item.image}
                  alt=""
                  className="w-[280px] rounded-md mt-12"
                />
              </Link>
              <h1 className="font-bold mt-4">{item.name}</h1>
              <h3>Rs. {item.price}.00</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shirts;
