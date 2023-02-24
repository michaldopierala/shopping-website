import React, { useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../context/CartContext'
import CheckoutComponent from '../component/checkout/CheckoutComponent';
import Product from '../component/checkout/Product';
// import Product2 from '../component/checkout/Product2';




export default function Checkout() {
  const { setCartOpen, CartQuantity, cartItems } = useContext(ShoppingCartContext)

  useEffect(() => {
    setCartOpen(false)
  }, []);


  return (
    <div className='Checkout'>
      <div className='header'>Checkout</div>
      <div className='columnContainer'>
        <div className='column1'>
          <div className='address'> adress form componnent </div>
          <div> <CheckoutComponent />  </div>

        </div>
        <div className='column2'>
          {CartQuantity > 0 ?
            // cartItems.map((item, index) => <Product key={index} {...item} />)
            cartItems.map((item, index) => <Product key={index} {...item} />

            )

            : <div className='cartEmpty'> Cart is empty </div>}

        </div>
      </div>




    </div>
  )
}
