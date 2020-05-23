import React from 'react';
import './Counter.css';


const Counter = ({count}) => {
  

  let imageNum = count; 

  return (
    <div className="counter-frame">
      <div className="counter-frame-inset">
        <img src={require(`./circle${imageNum.toString()}.svg`)} alt={"5 guesses left"} className="counter-images"/>
      </div>
    </div>
  )
}

export default Counter