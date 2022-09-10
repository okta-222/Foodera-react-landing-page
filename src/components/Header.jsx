import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import logo from "../imgs/logo.png";

/* s nav icons */
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import SideMenu from "./SideMenu";
/* e nav icons */

import navLinks from '../data/navLinks'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollNav, setScrollNav] = useState(false)

  const MobWidth = 768;

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);

  useEffect(() => {
    const changeNav = () => {
     const offest  = window.scrollY;
     if(offest > 10) {
      setScrollNav(true)
     } else {
      setScrollNav(false)
     }
    };
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      {toggleMenu && screenWidth < MobWidth && <SideMenu/>}
      <div id="header" className={`${scrollNav ? 'header  scroll' : 'header'}`}>
        <div className="container">
          <a href="#header" className="logo">
            <img src={logo} alt="logo" />
          </a>
          { screenWidth > MobWidth && <Nav/> }

          <span className="menu-icon" onClick={toggleNav}>
            {toggleMenu ? <IoMdClose /> : <HiMenuAlt3 />}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
