import React from 'react';
import { AiFillYoutube, AiOutlineTwitter , AiOutlineCopyright } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="content">
          <ul className="links flex">
            <li className="link">register</li>
            <li className="link">forum</li>
            <li className="link">affiliate</li>
            <li className="link">faq</li>
          </ul>
          <div className="social-icons flex">
            <span className="icon"><FaFacebookF/></span>
            <span className="icon"><AiOutlineTwitter/></span>
            <span className="icon"><AiFillYoutube/></span>
            <span className="icon"><BsInstagram/></span>
          </div>
          <p className="copyright"> <AiOutlineCopyright/> foodera all right reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer