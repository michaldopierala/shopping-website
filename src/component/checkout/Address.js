import React, { useState } from 'react'



export default function Address() {

    const [address, setAddress] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddress(values => ({ ...values, [name]: value }))
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(inputs)
    // }

    return (
        <div className='address'>
            <form >
                <label>Name
                    <br></br>
                    <input
                        type="text"
                        name="name"
                        value={address.name || ""}
                        onChange={handleChange} />
                </label>
                <label>Surname
                    <input
                        type="text"
                        name="surname"
                        value={address.surname || ""}
                        onChange={handleChange} />
                </label>
                <label className='item3'>
                    <div>Address</div>
                    <input
                        type="text"
                        name="address"
                        value={address.address || ""}
                        onChange={handleChange} />
                </label>
                <label>City
                    <input
                        type="text"
                        name="city"
                        value={address.city || ""}
                        onChange={handleChange} />
                </label>
                <label >Postal Code
                    <input
                        type="text"
                        name="postal"
                        value={address.postal || ""}
                        onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}
