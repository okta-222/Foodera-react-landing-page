import React, {useState} from 'react';
import data from '../data/Questions';


import {AiOutlineArrowUp , AiOutlineArrowDown} from 'react-icons/ai'

function Questions() {
  const [currentQut, setcurrentQut] = useState(-1);

  const toggle = (i) => {
    if(currentQut == i ) {
      setcurrentQut(-1)
      return
    }
    setcurrentQut(i)
  } 

  return (
    <div id="questions" className="questions">
      <div className="headings">
        <h2 className="title">Popular FAQ</h2>
      </div>
      <div className="container">
        {
          data.map((item,i) => {
            return (
                <div className="question" key={i}>
                  <h1 className={`title ${currentQut == i ? 'up' : 'down'}`} onClick={() => toggle(i)}>
                    {item.name}                       
                    <span className={`icon`}><AiOutlineArrowUp/></span>
                  </h1>
                  <div className={`content ${currentQut == i ? 'show' : 'hide'}`}>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Questions