import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Store from './page/Store';
import About from './page/About';
import Product from './page/Product';
import Navbar from './component/Navbar';
import CartContext from './context/CartContext';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>   {/* Should contex be inside of router or outside ?  */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>

    </>
  );
}

export default App;
