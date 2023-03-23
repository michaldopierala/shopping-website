import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Store from './page/Store';
import About from './page/About';
import Product from './page/Product';
import Checkout from './page/Checkout';
import PaymentSucces from './page/PaymentSucces';
import CartContext from './context/CartContext';
import Footer from './component/Footer';
import Main from './page/Main';
import NotFound from './page/NotFound';
import Url from './component/Url';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>   {/* Should contex be inside of router or outside ?  */}
          <Routes>
            <Route path="/" element={<Main />}  >
              <Route index element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/success" element={<PaymentSucces />} />
              {/* <Route path="*" element={<NotFound />} /> */}
              {/* <Route path="*" element={<Url/>} /> */}
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/url/:extension" element={<Url/>} />
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
