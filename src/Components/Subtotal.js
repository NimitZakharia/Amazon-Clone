import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider';
import { getCartTotal } from '../reducer';

function Subtotal() {
  const [{cart}] = useStateValue();
  return (
    <div className='Subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                <small className='Subtotal__gift'>
                    <input type='checkbox'/>This order contains a gift
                </small>
                </>

            )}  
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix='₹'      
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal