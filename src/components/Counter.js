import React from 'react';
import './Counter.css';


const Counter = ({count, theme}) => {
  

  let imageNum = count; 

  return (
    <div className={(theme === 'light' ? 'counter-frame-light' : 'counter-frame-dark')}>
      <div className={(theme === 'light' ? "counter-frame-inset-light" : "counter-frame-inset-dark")}>
        <img src={require(`../circle${imageNum.toString()}.svg`)} alt={"5 guesses left"} className="counter-images"/>
      </div>
    </div>
  )
}

export default Counter