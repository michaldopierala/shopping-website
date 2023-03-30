import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../context/CartContext'
import CartItem from './CartItem'
import products from '../data/products.json'



export default function ShoppingCart() {
    const { closeCart, cartOpen, cartItems, CartQuantity } = useContext(ShoppingCartContext)

    if (!cartOpen) return null

    return (
        <div className='ShoppingCart'>
            <div className='tab'>
                <div className='title'>Cart </div>
                <button className='close_btn' onClick={closeCart}><img src='/img/close.png' alt='close button' /></button>
                {CartQuantity > 0
                    ? cartItems.map((item, index) => <CartItem key={index} {...item} />)
                    : <div className='cartEmpty'> Cart is empty </div>}
                <div className='totalContainer'>
                    {CartQuantity > 0
                        ? <div className='total'>Total: $ {cartItems.reduce((total, cartItem) => {
                            const item = products.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)}
                            <div className='checkoutContainer'>
                                <Link to={`/checkout`} className='add_to_cart_btn checkout'>Checkout</Link>
                            </div>
                        </div>
                        : null}

                </div>


            </div>

        </div>
    )
}
