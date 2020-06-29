import React from 'react';
import './Counter.css';
import GuessSVG from './guessSVG'


const Counter = ({count, theme}) => {
  

  let imageNum = count; 

  return (
    <div className={(theme === 'light' ? 'counter-frame-light' : 'counter-frame-dark')}>
      <div className={(theme === 'light' ? "counter-frame-inset-light" : "counter-frame-inset-dark")}>
        <GuessSVG count={count} theme={theme}/>
      </div>
    </div>
  )
}

export default Counter