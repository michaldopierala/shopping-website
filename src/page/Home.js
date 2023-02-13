import React from 'react'
import StoreItem from '../component/StoreItem'
import products from '../data/products.json'
import HomeCarusel from '../component/HomeCarusel'
import ProductsCarusel from '../component/ProductsCarusel'

export default function Home() {

    return (
        <div className='Home'>
            <HomeCarusel />

            <div className='ProductsCarusel'>
                <ProductsCarusel />
            </div>
        </div>


    )
}
