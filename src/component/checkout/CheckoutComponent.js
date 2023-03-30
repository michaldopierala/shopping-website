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
    // let obj2 = [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }];
    // Create PaymentIntent as soon as the page loads
    fetch("https://sweetdream.ink/server/test.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify([{ id: 1, quantity: 3 }, { id: 2, quantity: 2 }]),
      // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        props.changeTotal(data.total);
        props.intent(data.clientSecret);
        console.log(data)
      })
  }, []);


  const appearance = {
    theme: 'stripe',
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
       borderRadius: 20,
      },
    },
    colors: {
      primary: '#fcfdff',
      background: '#ffffff',
      componentBackground: '#f3f8fa',
      componentBorder: '#f3f8fa',
      componentDivider: '#000000',
      primaryText: '#000000',
      secondaryText: '#000000',
      componentText: '#000000',
      placeholderText: '#73757b',
    },
  };

  const customAppearance = {
    font: {
    //   family:
    //     Platform.OS === 'android' ? 'avenirnextregular' : 'AvenirNext-Regular',
    },
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
       borderRadius: 20,
      },
    },
    colors: {
      primary: '#fcfdff',
      background: '#ffffff',
      componentBackground: '#f3f8fa',
      componentBorder: '#f3f8fa',
      componentDivider: '#000000',
      primaryText: '#000000',
      secondaryText: '#000000',
      componentText: '#000000',
      placeholderText: '#73757b',
    },
   };

  const options = {
    clientSecret,
    appearance,
    customAppearance,
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
