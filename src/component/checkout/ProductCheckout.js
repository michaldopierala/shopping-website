import React from 'react'
import products from '../../data/products.json'


export default function Product({ id, quantity }) {

  const product = products.find((item) => item.id === id)

  return (
    <div className='ProductComponent'>
      <div className='product'>
        {product.name}
        <span className='quantity'> x {quantity}</span>
        <div className='productPrice'>$ {product.price} </div>
      </div>
      <div className='productTotal'>$ {quantity * product.price} </div>

    </div>
  )
}