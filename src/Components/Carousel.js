import React, { useState } from 'react'
import "./Carousel.css"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";

function Carousel({data}) {
  //console.log(data);
  const [slide,setSlide] =useState(0);
  const nextSlide =()=>{
    setSlide(slide ===  data.length -1?0: slide+1);
  }
  const prevSlide =()=>{
    setSlide(slide === 0? data.length -1: slide-1);
  }

  return (
    
    <div className='Carousel'>
      <BsArrowLeftCircleFill className='Arrow__left' onClick={prevSlide}/>
      {data.map((item,idx)=>{
        return <img className={slide ===idx? "Carousel__slide": "Carousel__slide Carousel__hidden"} src={item.src} alt={item.alt} key={idx}/>
      })}
      <BsArrowRightCircleFill className='Arrow Arrow__right' onClick={nextSlide}/>
    </div>
  )
}

export default Carousel