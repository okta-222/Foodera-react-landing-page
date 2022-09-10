import React, {useState , useEffect , useRef} from 'react';
import CountUp from 'react-countup';

function Statics() {

/*     const CountUp = ({start = 0, end , timer = 50 , sectHeight = 1500}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);
    const acc = end / 200;
    let pageScroll = window.scrollY;


      const UpDateCountUp = () => {
          pageScroll = window.scrollY
          console.log(pageScroll);
  
          if (pageScroll >= sectHeight) {
            if(ref.current < end) { // ref.current == start || start < end
              const result = Math.ceil(ref.current + acc); // start + total
              if(result > end) return setState(end);
              setState(result);
              ref.current = result
            } 
          }
          setTimeout(UpDateCountUp, timer);
      }
      useEffect(() => {
        let isMuted = true;  
        if(isMuted) {
          window.addEventListener("scroll", UpDateCountUp);
        }
        return () => (isMuted = false)
      }, [start, end])
      return <span className='number'> +<b>{state}</b> </span>

  } */
  return (
    <div id="statics" className="statics">
      <div className="container">
        <div id="box"  className="box">
          <CountUp start={0} end={3000} prefix={'+'} duration={1}/>
          <span className="title">savings</span>
        </div>
        <div className="box">
          <CountUp start={0} end={1500} prefix={'+'} duration={1}/>
          <span className="title">photos</span>
        </div>
        <div className="box">
         <CountUp start={0} end={5000} prefix={'+'} duration={1}/>
          <span className="title">rockets</span>
        </div>
        <div className="box">
          <CountUp start={0} end={5700} prefix={'+'} duration={1}/>
          <span className="title">globes</span>
        </div>
      </div>
    </div>
  )
}

export default Statics