import React from 'react'
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router-dom";
// import products from '../data/products.json'
// import StoreItem from '../component/StoreItem'
import Slider from '../component/imageSlider/Slider'
// import ImgButtons from './slider/ImgButtons'
import ImgButtons from '../component/imageSlider/ImgButtons';












import StoreItem from '../component/StoreItem'
import products from '../data/products.json'

export default function Product() {

    const { id } = useParams();

    const product = products.find(item => id == item.id)
    // console.log(product)
    return (
        // <div className='Product'>
        //     <div className='Carousel'>
        //         <div>
        //             <Slider {...product} />
        //         </div>
        //     </div>
        //     <div className='description'>
        //         Description
        //     </div>
        // </div>


        <div className='Product'>
            <div className='sliderContainer'>
                <div className='slider'>
                    <Slider {...product}  />
                </div>
                <div className='imgButtons'>
                    {/* <ImgButtons {...product} /> */}
                    {/* buttons */}
                </div>
            </div>
            <div className='description'> product description t</div>
        </div>

    )
}
