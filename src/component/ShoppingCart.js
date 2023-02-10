import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/CartContext'
import CartItem from './CartItem'
import products from '../data/products.json'


export default function ShoppingCart() {
    const { closeCart, cartOpen, cartItems, CartQuantity } = useContext(ShoppingCartContext)


    if (!cartOpen) return null

    return (
        <div className='ShoppingCart'>
            <div className='tab'> Cart
            <button className='close_btn' onClick={closeCart}><img src='./img/close.png' alt='close button' /></button>
                {CartQuantity > 0 ? cartItems.map((item) => <CartItem {...item} />) : <div> cart is empty </div>}

                <div className='total'>Total: ${cartItems.reduce((total, cartItem) => {
                    const item = products.find(i => i.id === cartItem.id)
                    return total+(item?.price||0)* cartItem.quantity
                }, 0)}
                </div>

            </div>

        </div>
    )
}
