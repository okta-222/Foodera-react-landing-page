import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from '../../src/imgs/2.jpg';
import img2 from '../../src/imgs/1.jpg';
function Reviews() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div id="reviews" className="reviews">
      <div className="container">
        <Slider 
            {...settings}
        >
            <div className="card">
              <img src={img2} alt="profile-img" className="profile" />
              <p className="desc">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo eveniet, maxime pariatur cum omnis obcaecati. Explicabo quasi, 
                vero rerum delectus culpa consequuntur sequi dicta assumenda veniam a?"
              </p>
              <span className='title'>simab dive - web developer</span>
            </div>
            <div className="card">
              <img src={img2} alt="profile-img" className="profile" />
              <p className="desc">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo eveniet, maxime pariatur cum omnis obcaecati. Explicabo quasi, 
                vero rerum delectus culpa consequuntur sequi dicta assumenda veniam a?"
              </p>
              <span className='title'>simab dive - web developer</span>
            </div>
            <div className="card">
              <img src={img2} alt="profile-img" className="profile" />
              <p className="desc">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo eveniet, maxime pariatur cum omnis obcaecati. Explicabo quasi, 
                vero rerum delectus culpa consequuntur sequi dicta assumenda veniam a?"
              </p>
              <span className='title'>simab dive - web developer</span>
            </div>

        </Slider>
      </div>
    </div>
  )
}

export default Reviews