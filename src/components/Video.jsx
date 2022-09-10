import React from "react";
import {VscDebugStart} from 'react-icons/vsc'
// LightGallery 
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import img from '../imgs/2.jpg'

//https://www.youtube.com/watch?v=LXb3EKWsInQ&t=94s
//https://www.youtube.com/watch?v=iO9RCRFvNbo

function Video() {
  return (
    <div id="video" className="video">
      <div className="container">
        <div className="text">
          <h3 className="title">
            When a man's stomach is full it makes no
            difference whether he is rich or poor.
          </h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
          </p>
          <LightGallery  speed={500} plugins={[lgThumbnail, lgZoom , lgVideo]}>
            <a
              href="https://www.youtube.com/watch?v=iO9RCRFvNbo"
              data-lg-size="1280-720"
              data-src="https://www.youtube.com/watch?v=LXb3EKWsInQ&t=94s"
              data-poster="https://i.ytimg.com/an_webp/LXb3EKWsInQ/mqdefault_6s.webp?du=3000&sqp=CMD7vpgG&rs=AOn4CLBFaiZxhs6Wz_-pU-xLPEW9UtV0qg"
              className='popup'
            >
            <VscDebugStart/> <span>watch our story</span>
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
}

export default Video;
