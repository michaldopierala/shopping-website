import React, { useContext } from 'react'
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router-dom";
import Slider from '../component/imageSlider/Slider'
import ImgButtons from '../component/imageSlider/ImgButtons';
import { ShoppingCartContext } from '../context/CartContext';
import products from '../data/products.json'


// import { isButtonElement } from 'react-router-dom/dist/dom';

export default function Product() {

    const { cartItems, increaseCartQuantity, decreaseCartQuantity, remove } = useContext(ShoppingCartContext)

    const { id } = useParams();

    const product = products.find(item => id == item.id)

    const productInCart = cartItems.find(item => id == item.id)
    // console.log(productInCart)


    return (
        <div className='Product'>
            <div className='sliderContainer'>
                <div className='slider'>
                    <Slider {...product} />
                </div>
            </div>
            <div className='description'>
                <div className='name'>{product.name}</div>
                <div className='price'>$ {product.price}</div>



                {/* <div className='addToCart'> */}
                {/* {productInCart ? "change quantity" : <button onClick={() => increaseCartQuantity(product.id)}>+ Add to Cart </button>} */}



                <div className='inCart'>
                    {productInCart == null ?
                        <button className='addToCart' onClick={() => increaseCartQuantity(product.id)}> + Add to Cart </button>
                        :
                        <div >
                            <div className='changeQuantity'>
                                <button onClick={() => decreaseCartQuantity(product.id)}> - </button>
                                <span> <span className='quantity'>  {productInCart.quantity} </span>in cart </span>
                                <button onClick={() => increaseCartQuantity(product.id)}> + </button>
                            </div>

                            <button className='remove' onClick={() => remove(product.id)}> Remove</button>

                        </div>
                    }



                </div>









                {/* </div> */}




                <div className='textDescription'>
                    <div className='title'> Description</div>
                    <div className='text'> {product.description} </div>
                </div>
            </div>
        </div>
    )
}
