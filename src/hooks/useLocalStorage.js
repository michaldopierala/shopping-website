import React, { useEffect, useState } from 'react'

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))

    if (savedValue) return savedValue
    if (initialValue instanceof Function) return initialValue()
    return initialValue
}




export default function useLocalStorage(key, initialValue) {

    const [cartItems, setCartItems] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(cartItems))
    }, [cartItems])

    return [cartItems, setCartItems]
}
