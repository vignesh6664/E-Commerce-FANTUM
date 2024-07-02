import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import HomePage from "./HomePage";
import NewProductDetails from "./NewProductDetails";
import TrousersProducts from "./TrousersProducts";
import SweatShirtsProduct from "./SweatShirtsProduct";
import Contact from "./Contact";
import Pants from "./Pants";
import Shirts from "./Shirts";
import Tshirts from "./Tshirts";
import ShirtProduct from "./ShirtProduct";
import PantsProduct from "./PantsProduct";
import TshirtProduct from "./TshirtProduct";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/newproducts/:id" element={<NewProductDetails />} />
        <Route path="/trousers/:id" element={<TrousersProducts />} />
        <Route path="/sweatshirts/:id" element={<SweatShirtsProduct />} />
        <Route path="/shirt/:id" element={<ShirtProduct />} />
        <Route path="/pant/:id" element={<PantsProduct />} />
        <Route path="/tshirt/:id" element={<TshirtProduct />} />
      </Routes>
    </>
  );
}

export default App;
