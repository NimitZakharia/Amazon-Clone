import React from 'react'
import { useStateValue } from '../stateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({id,image,title,price,rating}) {
    const [,dispatch] =useStateValue();
    const removeFromCart =()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
        })
    }
  return (
    
    <div className='CheckoutProduct'>

        <img className='CheckoutProduct__image' src={image} alt=' '/>
        <div className='CheckoutProduct__info'>
            <p className='CheckoutProduct__title'>{title}</p>
            <p className='CheckoutProduct__price'>
                <small>₹</small>
               <strong> {price}</strong>
                
            </p>
            <div className='CheckoutProduct__rating' >
                {Array(rating).fill().map((_,i)=>(<span><p>&#11088;</p></span>))}
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>

    </div>
  )
}

export default CheckoutProduct;