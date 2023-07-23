import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'
import { useStateValue } from '../stateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{cart,user}] = useStateValue();
  let userName ="";
  if(user){
    userName = user.email.split('@')[0]
  }
  else{
    userName = " Please Sign In"
  }
  
  return (
    <div className='Checkout'>
        <div className='Checkout__left'>
            <img className='Checkout__ad' src='https://m.media-amazon.com/images/G/31/img17/AmazonPay/Siddhi/Uncarded_PC_Prime_4million._CB589993792_.jpg' alt="amzon-ad"/>
            <div className='Checkout__title'>
              <h3>Hello {userName}</h3>
            <h2>Your Shopping Cart</h2>
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
        
        <div className='Checkout__right'>
        <h2>
           <Subtotal/>
        </h2>
    </div>
    </div>
    

  )
}

export default Checkout;