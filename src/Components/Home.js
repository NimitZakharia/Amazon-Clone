import React from 'react'
import "./Home.css"
import Product from './Product'
import Carousel from './Carousel'
import {slides} from '../Image-data/carousel.json';

function Home() {
  return (
    <div className='Home'>
        <div className='Home__container'>
           <Carousel data={slides}/>
            {/*<img  alt="prime-add-img" className="Home__img" src='https://m.media-amazon.com/images/I/71JFH2uM8JL._SX3000_.jpg'/>*/}
            <div className='Home__row'>
                <Product
                id={1236}
                    title="Apple iPhone 14 (128 GB) - Midnight  "
                    price={66999.69}
                    image="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY218_.jpg"
                    rating={4}
                />
                <Product
                id={1237}
                    title="Atomic Habits Paperback -1 January 2018
                    by James Clear (Author) "
                    price={640.69}
                    image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg"
                    rating={5}
                />
                <Product
                id={1238}
                    title="Marshall Kilburn II 36W Bluetooth Portable Speaker, color - Black"
                    price={24689.69}
                    image="https://m.media-amazon.com/images/I/81r6KN6buAL._AC_UY218_.jpg"
                    rating={3}
                />
            </div>
            <div className='Home__row'>
                
                <Product
                    id={1231}
                    title="LG Ultragear 21:9 Curved Gaming Monitor 86.42 cm (34 Inch), QHD 3440 x 1440, 5ms, 160Hz, AMD FreeSync™ Premium, HDR 10, sRGB 99% (Typ.), Height Adjust Stand, DP"
                    price={34999.69}
                    image="https://m.media-amazon.com/images/I/61+48zFNZ7L._AC_UY218_.jpg"
                    rating={4}
                />
                <Product
                    id={1232}
                    title="Apple 2023 MacBook Air Laptop with M2 chip: 38.91 cm (15.3-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera"
                    price={126790.69}
                    image="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg"
                    rating={5}
                />
                
                
            </div>
            <div className='Home__row'>
                <Product
                    id={1233}
                    title="Nutrabay Gold Spark Pre Workout - 250g Fruit Punch, 25 Servings  "
                    price={759}
                    image="https://m.media-amazon.com/images/I/81LFrqQnozL._AC_SY200_.jpg "
                    rating={4}
                />
                <Product
                id={1234}
                    title="Herschel Supply Co. 22 ltrs (12 Cms) backpack(10007-00007-OS_navy) "
                    price={11495}
                    image="https://m.media-amazon.com/images/I/9148M3GDv9L._AC_UL400_.jpg"
                    rating={5}
                />
                <Product
                id={1235}
                    title="All-new Kindle Paperwhite (16 GB) Now with a 6.8 display and adjustable warm light"
                    price={14999}
                    image="https://m.media-amazon.com/images/I/51u3LQ9tkhL._AC_UY218_.jpg"
                    rating={3}
                />
            </div>

        </div>
    </div>
  )
}

export default Home