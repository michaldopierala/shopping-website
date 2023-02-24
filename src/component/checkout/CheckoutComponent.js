import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { ShoppingCartContext } from '../../context/CartContext'



const stripePromise = loadStripe("pk_test_ucVqsBwK0IGPoRLxj24fS1l4");


export default function CheckoutComponent() {

    const { cartItems  } = useContext(ShoppingCartContext)

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // console.log(cartItems)
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost/checkout.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ items: cartItems }),
            // body: JSON.stringify(cartItems),

          })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);


      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };


  return (
    <div className="App">
    {clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    )}
  </div>
  )
}
