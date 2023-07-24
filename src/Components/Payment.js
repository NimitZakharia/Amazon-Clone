import React from "react";
import "./Payment.css";
import { useStateValue } from "../stateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";

function Payment() {

  const [{cart,user}] =useStateValue();
  let userEmail ="";
  let userName ="";
  if(user){
    userEmail = user.email;
    userName = user.email.split('@')[0]
  }
  else{
    userEmail= " Email not Found"
    userName = " Please Sign-in"
  }

  return (

    <div className="Payment">
      <div className="Payment__container">

        <h1>
            Checkout(<Link to='/checkout'>{cart.length} items</Link>)
        </h1>
        <div className="Payment__section">
            <div className="Payment__title">
                <h3>Delivery address</h3>
            </div>
            <div className="Payment__address">
                <p><strong>Name:</strong> {userName}</p>
                <p><strong>Email:</strong> {userEmail}</p>
                <p>123 Main St</p>
                <p>Anytown, 17101 USA </p>
            </div>
        </div>
        <div className="Payment__section">
            <div className="Payment__title">
                <h3>Review Items for Delivery</h3>
            </div>
            <div className="Payment__items">
            {cart.map(item=>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
            ))}
            </div>
        </div>
        <div className="Payment__section">
            <div className="Payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="Payment__details">
                
            </div>
        </div>



      </div>
    </div>
  );
}

export default Payment;
