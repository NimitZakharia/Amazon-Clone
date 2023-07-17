import React, { useState } from 'react'
import { useStateValue } from '../stateProvider';
import "./Product.css"


function Product({title,image,price,rating}) {
  const [state,dispatch] =useStateValue();

  const addToCart =()=>{
    dispatch({
      type:"ADD_TO_CART",
      item :{
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };

  return (
    <div className='Product'>
        <div className='Product__info'>
            <p>{title}</p>
            <p className='Product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='Product__rating'>
                {Array(rating).fill().map((_,i) => (<span><p>&#11088;</p></span>))}
            </div>
        </div>
        <img src={image}/>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product