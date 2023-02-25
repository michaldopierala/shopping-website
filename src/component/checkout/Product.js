import React from 'react'
import products from '../../data/products.json'


export default function Product({ id, quantity }) {

  const product = products.find((item) => item.id === id)

  return (
    <div className='Product'>
      <div> {product.name}<span> x {quantity}</span>
      <div>$ {product.price} </div> </div>

      <div>$ {quantity*product.price} </div>
     
    </div>
  )
}