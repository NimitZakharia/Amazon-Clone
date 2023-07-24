import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider';
import { getCartTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const history = useNavigate();
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
        <button onClick={(e) => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal