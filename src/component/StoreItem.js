import React, { useContext } from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ShoppingCartContext } from '../context/CartContext';



export default function StoreItem({ id, name, price, imgUrl }) {

    const { increaseCartQuantity, decreaseCartQuantity, remove, cartItems } = useContext(ShoppingCartContext)

    const itemQuantity = cartItems.find((item) => { return item.id == id })?.quantity || 0


    return (
        <div className='StoreItem'>
            <div className='imgConatainer'>
                <Link to={`../product/${id} `}   > <img src={imgUrl[0]} /> </Link>
            </div>

            <div className='product_name'>
                <span>{name}</span>
                <span className='price'>$ {price}</span>
            </div>
            <div className='changeQuantity'>
                {itemQuantity === 0 ?<div className='addProduct '><button className='add_to_cart_btn' onClick={() => increaseCartQuantity(id)} >+ Add Product </button></div>  :
                    <div>
                        <div className='showQuantity'>
                            <button onClick={() => decreaseCartQuantity(id)} ><span>-</span></button>
                            <span className='inCart'>  {itemQuantity} <span >in cart</span></span>
                            <button onClick={() => increaseCartQuantity(id)}><span>+</span></button>
                        </div>
                        <button className='remove add_to_cart_btn' onClick={() => remove(id)}> Remove</button>
                        
                    </div>

                }

            </div>
        </div>
    )
}
