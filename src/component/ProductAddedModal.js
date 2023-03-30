import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/CartContext'


export default function ProductAddedModal() {
  const { newProduct, setNewProduct, closeCart } = useContext(ShoppingCartContext)

  console.log('hello world - this info is from Product added modal ')
  console.log(newProduct)

  if (!newProduct) return null

  return (
    <div className='ProductAddedModal'>
      <div className='container'>
        <div className='text'>Product added to shopping cart</div>
        <div className='btn'>
          <button onClick={closeCart}>Go to cart</button>
          <button onClick={() => setNewProduct(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}
