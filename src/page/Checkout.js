import React, { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../context/CartContext'
import CheckoutComponent from '../component/checkout/CheckoutComponent';
import Product from '../component/checkout/Product';
import Address from '../component/checkout/Address';
// import Product2 from '../component/checkout/Product2';




export default function Checkout() {
  const { setCartOpen, CartQuantity, cartItems } = useContext(ShoppingCartContext)

  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setCartOpen(false)
  }, []);


  return (
    <div className='Checkout'>
      <div className='header'>Checkout </div>
      <div className='columnContainer'>
        <div className='column1'>
          <div className='head'> Adreas </div>
          <Address />
          <div className='head'> Payment </div>
          <div>
          {total==0 &&<div className='loader'><svg><circle cx="70" cy="70" r="70"> </circle> </svg></div> }
          <CheckoutComponent changeTotal={total => setTotal(total)} />
            
          </div>

        </div>
        <div className='column2'>
          {CartQuantity > 0 ?
            // cartItems.map((item, index) => <Product key={index} {...item} />)
            cartItems.map((item, index) => <Product key={index} {...item} />

            )

            : <div className='cartEmpty'> Cart is empty </div>}
          <div className='total'> Tota: $ {total}  </div>

        </div>
      </div>




    </div>
  )
}
