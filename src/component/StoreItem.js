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
                {itemQuantity === 0 ? <button className='addProduct' onClick={() => increaseCartQuantity(id)} >+ Add Product </button> :
                    <div>
                        <div className='showQuantity'>
                            <button onClick={() => decreaseCartQuantity(id)}>-</button>
                            {itemQuantity} in cart
                            <button onClick={() => increaseCartQuantity(id)}>+</button>
                        </div>
                        <button className='remove' onClick={()=>remove(id)}> Remove</button>
                    </div>

            }

            </div>
        </div>
    )
}
