import React from 'react'
import products from '../../data/products.json'



export default function ButtonGroup({ img, next, previous, goToSlide, ...rest }) {

    const { carouselState: { currentSlide } } = rest;

    return (
        <div className='ButtonGroup'>
            <div className='imgSelector'>
                {img.map((item, index) => <button key={index} className={currentSlide - 2 === index ? 'active' : ''} onClick={() => goToSlide(index + 2)}><img src={item} alt='image' /> </button>)}
            </div>
            <div className='counter'>{currentSlide - 1}/4 </div>
        </div>
    )
}
