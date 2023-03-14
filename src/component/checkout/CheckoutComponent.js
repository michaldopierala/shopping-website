import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { ShoppingCartContext } from '../../context/CartContext'



const stripePromise = loadStripe("pk_test_ucVqsBwK0IGPoRLxj24fS1l4");


export default function CheckoutComponent(props) {

  const { cartItems } = useContext(ShoppingCartContext)
  const [clientSecret, setClientSecret] = useState("");

// console.log( JSON.stringify({ items: cartItems }));
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://afterglowfashion.com/server/stripe_intent.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( 2500 ),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        props.changeTotal(data.total);
        console.log(data.test)
      })
  }, []);


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (
    <div className="Stripe">

      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
