import React from 'react'
import StoreItem from '../component/StoreItem'
import products from '../data/products.json'

export default function Home() {

    return (
        <div className='Home'>
            {products.map((item) => <StoreItem {...item}/>  )}

        </div>


    )
}
