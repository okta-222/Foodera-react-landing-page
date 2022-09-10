import React from 'react'

import img1 from '../../src/imgs/01.jpg';
import img2 from '../../src/imgs/02.jpg';
import img3 from '../../src/imgs/03.jpg';

function Services() {
  return (
    <div id="services" className="services">
      <div className="headings">
        <h3 className="title">explore our foods</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Alias velit incidunt perspiciatis consequatur explicabo. 
          Eaque, laboriosam! Modi, facere, molestias incidunt, cumque itaque.
          quaerat id omnis accusamus vel aliquam veritatis consequuntur 
        </p>
      </div>
      <div className="container">
        <div className="box">
          <div className="img-holder">
            <img src={img1} alt="img-1" />
          </div>
          <div className="desc">
            <h4 className="title">Rainbow Vegetable Sandwich</h4>
            <div className="detail">
              <span className="time">Time: 10</span>
              -
              <span className="minutes">15 Minutes</span>
              |
              <span className="serv">Serves: 1</span>
            </div>
            <div className="price">
              <span className="new-price">$10.50</span>
              <span className="old-price">$11.70</span>
            </div>
          </div>
          <button className="btn">order now</button>
        </div>
        <div className="box">
          <div className="img-holder">
            <img src={img2} alt="img-2" />
          </div>
          <div className="desc">
            <h4 className="title">Vegetarian Burger</h4>
            <div className="detail">
              <span className="time">Time: 30</span>
              -
              <span className="minutes">45 Minutes</span>
              |
              <span className="serv">Serves: 1</span>
            </div>
            <div className="price">
              <span className="new-price">$10.50</span>
              <span className="old-price">$11.70</span>
            </div>
          </div>
          <button className="btn">order now</button>
        </div>
        <div className="box">
          <div className="img-holder">
            <img src={img3} alt="img-3" />
          </div>
          <div className="desc">
            <h4 className="title">Raspberry Stuffed French Toast</h4>
            <div className="detail">
              <span className="time">Time: 15</span>
              -
              <span className="minutes">20 Minutes</span>
              | 
              <span className="serv">Serves: 1</span>
            </div>
            <div className="price">
              <span className="new-price">$10.50</span>
              <span className="old-price">$11.70</span>
            </div>
          </div>
          <button className="btn">order now</button>
        </div>
      </div>
    </div>
  )
}

export default Services