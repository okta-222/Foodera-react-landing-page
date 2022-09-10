import React, { useState , useEffect} from 'react';

import {FaShoppingBasket} from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css'


function Hero() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])
  
  return (
    <>
      <div className="home">
          <div className="container">
            <div className="text" data-aos="fade-right">
              <h2 className="title">
                Good food choices are good investments.
              </h2>
              <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
              </p>
              <div className="btn-group">
                <button className='btn one'>  order now </button>
                <button className='btn two'>  learn more</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero