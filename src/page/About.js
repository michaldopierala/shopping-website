import { useContext } from "react";
import React from 'react'
import { ShoppingCartContext } from '../context/CartContext';
import TestCheckout from "../component/TestCheckout";


export default function About() {

  const {cartItems} = useContext(ShoppingCartContext)
  localStorage.clear();

  const display = JSON.stringify(cartItems)

  return (
  <div className="About">
      <div> 
        helo 
      </div>
  </div>

  )
}
