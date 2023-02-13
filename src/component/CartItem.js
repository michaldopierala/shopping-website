import React, { useContext } from 'react'
import products from '../data/products.json'
import { ShoppingCartContext } from '../context/CartContext'
import { Link } from "react-router-dom";






export default function CartItem({ id, quantity }) {

  const { remove } = useContext(ShoppingCartContext)


  const product = products.find((item) => item.id === id)

  return (
    <div className='CartItem'>
      <div className='left'>
        <img src={product.imgUrl[0]} alt='product image' />
        <div className='name'>
          {/* <Link to="/"> </Link> */}
          <a href={"/product/"+id}> {product.name}  </a>
         
          <span>x {quantity} </span>
          <div className='itemPrice'> $ {product.price}</div>
        </div>
      </div>
      <div className='right'>
        <span> $ {product.price*quantity}</span>
        <button onClick={() => remove(id)}>&#x2715;</button>
      </div>
    </div>
  )
}
