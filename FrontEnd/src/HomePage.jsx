import React from "react";
import Header from "./Header";
import NewProducts from "./NewProducts";
import Trousers from "./Trousers";
import SweatShirts from "./SweatShirts";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <NewProducts />
      <Trousers />
      <SweatShirts/>
      <Footer/>
    </div>
  );
};

export default HomePage;
