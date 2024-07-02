import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import OfferHeading from "./OfferHeading";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
    <OfferHeading/>
    <Navbar/>
      <div className="grid grid-cols-2 ">
        <div className="mt-32 ml-8 space-y-12">
          <h2 className="font-bold ">Contact Us : contactfantum@gmail.com</h2>
          <h1 className="font-bold text-4xl">Do you have any question?</h1>
          <p className="font-medium text-gray-600">
            We're available to assist you and are eager to hear from you. Should
            you have any inquiries regarding our products, require assistance
            with an order, or wish to provide feedback, our team is fully
            prepared to help.
          </p>
        </div>
        <div className="mt-32 ml-12">
          <textarea
            className=" border-2 border-black w-[490px] h-[220px] p-3 text-black rounded-lg"
            placeholder="Enter Your Queries..."
            name="Any Queries"
            id=""
          ></textarea>
          <div className="mt-4">
            <button className="bg-black text-white font-semibold p-3 rounded-md mb-8">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
