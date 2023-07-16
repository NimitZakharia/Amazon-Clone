import React from 'react'
import "./Product.css"

function Product({title,image,price,rating}) {
  return (
    <div className='Product'>
        <div className='Product__info'>
            <p>{title}</p>
            <p className='Product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='Product__rating'>
                {Array(rating).fill().map((_,i) => (<p>&#11088;</p>))}
            </div>
        </div>
        <img src={image}/>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product