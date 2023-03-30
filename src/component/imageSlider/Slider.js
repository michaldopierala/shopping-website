import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products from '../../data/products.json'
import ButtonGroup from './ImgButtons';


export default function Slider({ id, name, imgUrl }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }



    return (
        <Carousel
            className='Carousel'
            arrows={true}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup img={imgUrl} />}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="transform 200ms ease-in-out"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {imgUrl.map((item, index) => <img key={index} src={imgUrl[index]} />)}
        </Carousel>

    )
}
