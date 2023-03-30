import React, { useState, useContext } from 'react'
import { ShoppingCartContext } from '../context/CartContext'
import ProductCheckout from '../component/checkout/ProductCheckout';



export default function ShowSummary(props) {
    const { setCartOpen, CartQuantity, cartItems } = useContext(ShoppingCartContext)
    // const [total, setTotal] = useState(0);


    const [open, setOpen] = useState(false);
    return (
        <div className='ShowSummary'>
            <button onClick={() => { open ? setOpen(false) : setOpen(true) }}>
                {open
                    ? <div> <img className='trolley' src='../img/icons/trolley.png' /> hide order summary <img className='arrow' src='../img/icons/up.png' /></div>
                    : <div className='show'><spam><img className='trolley' src='../img/icons/trolley.png' /> show order summary <img className='arrow' src='../img/icons/down.png' /></spam><spam></spam></div>
                }
                {/* : <div className='show'><spam><img src='../img/icons/trolley.png' /> show order summary &#8897;</spam><spam>${props.total} </spam></div>} */}
            </button>
            {open
                && 
                <div className='summaryContent'>
                    {cartItems.map((item, index) => <ProductCheckout key={index} {...item} />)}
                    <div className='total'>  Total: ${props.total}  </div>
                </div>
             } 
        </div>
    )
}
