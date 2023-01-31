import React from 'react'
import products from '../data/products.json'

export default function Home() {
    const name = "name "
    return (
        <div>

            {products.map((item) => <div>{item.name}</div>)}
            {/* {products.map((item) => <img src={item.imgUrl} alt='product image' /> )} */}
            <img src='../img/product/id1/1.jpg' alt='img'/>
        </div>


    )
}
