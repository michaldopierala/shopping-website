import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import products from '../data/products.json'
import StoreItem from './StoreItem'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";



export default function ProductsCarusel2() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 5,
            slidesToSlide: 1,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: { max: 1000, min: 600 },
            items: 3,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 50,
        }
    }


    return (
        <div className='carusel'>
            <Carousel
                partialVisible={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="transform 200ms ease-in-out"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {/* {products.map((item) => <StoreItem key={item.id} {...item} />)} */}

                {products.map((item, index) =>
                    <div key={index} className='productContainer'>
                        <div className='product'>
                            <Link to={`../product/${item.id} `}>
                                <img key={item.id} src={item.imgUrl[0]} />
                            </Link>
                            <div className='name'>{item.name} </div>
                            <div className='price'>$ {item.price} </div>
                        </div>
                    </div>)
                }

            </Carousel>

        </div>
    )
}
