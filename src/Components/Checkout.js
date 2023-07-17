import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='Checkout'>
        <div className='Checkout__left'>
            <img className='Checkout__ad' src='https://m.media-amazon.com/images/G/31/img17/AmazonPay/Siddhi/Uncarded_PC_Prime_4million._CB589993792_.jpg' alt="amzon-ad"/>
            <div className='Checkout__title'>
            <h2>Your Shopping Cart</h2>

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