import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Store from './page/Store';
import About from './page/About';
import Product from './page/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navigation">
          <Link className="btn" to="/">Home </Link>
          <Link className="btn" to="store">Store</Link>
          <Link className="btn" to="about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
