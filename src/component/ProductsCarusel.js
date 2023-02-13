import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import products from '../data/products.json'
import StoreItem from './StoreItem'



export default function ProductsCarusel() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 2,
            partialVisibilityGutter: 100,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 40
        }
    }


    return (
        <div>
            <Carousel
                partialVisible={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {/* {products.map((item) => <StoreItem key={item.id} {...item} />)} */}

                {products.map((item) => <img key={item.id} src={item.imgUrl[0]} />)}

            </Carousel>

        </div>
    )
}
