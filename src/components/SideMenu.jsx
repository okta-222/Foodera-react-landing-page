import React from "react";
import navLinks from '../data/navLinks';
import { Link } from 'react-scroll';
function SideMenu() {
  return (
    <>
      <div className="sideMenu">
        <div className="container">
          <ul className="side-links">
            {navLinks.map((item, i) => {
              return (
                <li key={i} className="side-link">
                    <Link activeClass="active" className="link" to={`${item.name}`} smooth={true} duration={500} ><span className="icon">{item.icon}</span>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
