import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-4 ">
      <div className="ml-6">
        <h1 className="font-bold text-2xl ">
          Sign up for new stories and personal offers
        </h1>
        <p className="font-light mt-4">
          Join now for exclusive offers, the latest fashion trends, and style
          tips! Be the first to know.
        </p>
        <div className="mt-8">
          <input
            type="email"
            placeholder="Email"
            className=" bg-transparent border-2 border-white shadow-lg p-2 rounded-lg w-[350px]"
          />
        </div>
      </div>
      <div className="font-bold ml-6 mt-5 space-y-3 grid grid-cols-4 ">
        <div className="mt-3">
          <h3 className="mb-3">MEN</h3>
          <ul className="font-medium space-y-3 text-gray-500">
            <li>T-shirts</li>
            <li>Pants</li>
            <li>Shirts</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3">Legal</h3>
          <ul className="font-medium space-y-3 text-gray-500">
            <li>Terms and Conditions</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Info</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
