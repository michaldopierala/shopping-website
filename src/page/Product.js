import React from 'react'
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router-dom";
import products from '../data/products.json'


export default function Product() {

    const { id } = useParams();

    const product = products.find(item => id == item.id)

    return (
        <div className='Product'>
            <div> {product.name}</div>
            <img style={{width:"50%"}} src={product.imgUrl[0]} alt="product image"/>
            <div> Price: $ {product.price}</div>
        </div>
    )
}
