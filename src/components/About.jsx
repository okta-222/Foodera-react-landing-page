import React,{useEffect} from 'react';
import {BsCheckLg} from 'react-icons/bs';
import img1 from '../../src/imgs/1.png';
import img2 from '../../src/imgs/2.png';

function About() {

  return (
    <div id="about" className="about">
      <div className="container">
        {/* top sec */}
        <div className="intro intro-top">
          <div className="content">
            <div className="img-holder" >
              <img src={img1} alt="food-img" />
            </div>
            <div className="text">
              <h3 className="title">
                We pride ourselves on making real food from the best ingredients.
              </h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus 
                a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <button className="btn">learn more</button>
            </div>
          </div>
        </div>
        {/* bottom sec */}
        <div className="intro intro-bottom">
          <div className="content content-bottom">
          <div className="text text-bottom">
              <h3 className="title">
                We pride ourselves on making real food from the best ingredients.
              </h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus 
                a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <ul className="fets">
                <li className="fet"> <span  className='icon'><BsCheckLg/></span>  Lorem ipsum dolor sit amet consectetur</li>
                <li className="fet"> <span  className='icon'><BsCheckLg/></span>  Lorem ipsum dolor sit amet consectetur</li>
                <li className="fet"> <span  className='icon'><BsCheckLg/></span>  Lorem ipsum dolor sit amet consectetur</li>
              </ul>
              <button className="btn">learn more</button>
            </div>
          <div className="img-holder img-holder-bottom">
              <img src={img2} alt="food-img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About