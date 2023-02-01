import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


export default function StoreItem({ id, name, price, imgUrl }) {
    return (
        <div className='StoreItem'>
            <Link to={`../product/${id} `}   > <img src={imgUrl[0]} /></Link>
            
            <div className='product_name'>
                <span>{name}</span>
                <span className='price'>$ {price}</span>
            </div>
            <button>+ Add Product</button>
        </div>
    )
}
