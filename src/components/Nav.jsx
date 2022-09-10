import React , {useState , useEffect} from 'react';
import { Link } from 'react-scroll';

import SideMenu from './SideMenu';
import navLinks from '../data/navLinks';

function Nav() {
  return (
    <>
     {
     
        <nav>
            <ul className="nav-links">
              {
                navLinks.map((item, i) => {
                  return (
                    <li key={i} className={`nav-link`}>
                      <Link activeClass="active" className="link" to={`${item.name}`}  smooth={true} duration={500} >{item.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
            <button className="nav-btn">1800 789 123</button>
          </nav>
     }
    </>
  )
}

export default Nav