import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trousers = () => {
  const [pants, setPants] = useState([]);
  useEffect(() => {
    fetchPants();
  }, []);

  const fetchPants = () => {
    axios.get("http://localhost:3000/pants/").then((res) => {
      console.log(res.data);
      setPants(res.data);
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold ml-5 mt-8 mb-8">LINEN TROUSERS</h1>
        <div className="grid md:grid-cols-4 m-auto ">
          {pants.map((item) => (
            <div key={item.id} className="ml-5 mt-4">
              <Link to={`/trousers/${item.id}`}>
                <img
                  src={item.image}
                  alt=""
                  className="w-[350px] rounded-md "
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

export default Trousers;
