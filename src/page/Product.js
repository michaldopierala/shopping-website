import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router-dom";
import Slider from '../component/imageSlider/Slider'
import ImgButtons from '../component/imageSlider/ImgButtons';
import { ShoppingCartContext } from '../context/CartContext';
import products from '../data/products.json'
import ProductsCarusel2 from '../component/ProductsCarusel2';



// import { isButtonElement } from 'react-router-dom/dist/dom';

export default function Product() {

    const { cartItems, increaseCartQuantity, decreaseCartQuantity, remove } = useContext(ShoppingCartContext)

    const { id } = useParams();

    const product = products.find(item => id == item.id)

    const productInCart = cartItems.find(item => id == item.id)
    // console.log(productInCart)

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log('top of page')
      })


    return (
        <div className='Product'>
            <div className='slider_and_description'>

                <div className='sliderContainer'>
                    <div className='slider'>
                        <Slider {...product} />
                    </div>
                </div>
                <div className='description'>
                    <div className='name'>{product.name}</div>
                    <div className='price'>$ {product.price}</div>

                    <div className='inCart'>
                        {productInCart == null ?
                            <button className='add_to_cart_btn' onClick={() => increaseCartQuantity(product.id)}> + Add to Cart </button>
                            :
                            <div >
                                <div className='changeQuantity'>
                                    <button onClick={() => decreaseCartQuantity(product.id)}> - </button>
                                    <span> <span className='quantity'>  {productInCart.quantity} </span>in cart </span>
                                    <button onClick={() => increaseCartQuantity(product.id)}> + </button>
                                </div>
                                <button className='add_to_cart_btn' onClick={() => remove(product.id)}> Remove</button>
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


            <div className='otherProductsCarusel'>
                <div className='head'>Other products</div>
                <ProductsCarusel2 />
            </div>

        </div>
    )
}
