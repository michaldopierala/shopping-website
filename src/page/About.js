import { useContext } from "react";
import React from 'react'
import { ShoppingCartContext } from '../context/CartContext';
import TestCheckout from "../component/TestCheckout";
import Url from "../component/Url";


export default function About() {

  const {cartItems} = useContext(ShoppingCartContext)
  localStorage.clear();

  const display = JSON.stringify(cartItems)

  return (
  <div className="About">
      <div> 
        helo 
        <Url/>
      </div>
  </div>

  )
}
