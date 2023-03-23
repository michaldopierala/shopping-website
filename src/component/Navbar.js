import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ShoppingCartContext } from '../context/CartContext';
import MobileMenu from './MobileMenuTab';


export default function Navbar() {

    const { closeCart, CartQuantity } = useContext(ShoppingCartContext)
    return (
        <div className="Navbar" >
            <nav>
                <MobileMenu />
                <Link className="btn" to="/">Home </Link>
                <Link className="btn" to="store">Store</Link>
                <Link className="btn" to="about">About</Link>
                <img className='logo' src='../img/logo.png' alt='logo' />
                <button onClick={closeCart} className='cartIcon'>
                    <div className='cartCount'> <span>{CartQuantity}</span>  </div>
                    <img src='../img/cart.png' alt='cart icon' />
                </button>
            </nav>
        </div>
    )
}
