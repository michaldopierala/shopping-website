import React from 'react'
import products from '../../data/products.json'


export default function Product({ id, quantity }) {

    const product = products.find((item) => item.id === id)

  return (
    <div>{product.name}</div>
  )
}