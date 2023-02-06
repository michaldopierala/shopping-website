import React from 'react'
import StoreItem from '../component/StoreItem'
import products from '../data/products.json'


export default function Store() {
  return (
    <div className='Store'>

      {products.map((item) => <StoreItem key={item.id} {...item} />)}

    </div>
  )
}
