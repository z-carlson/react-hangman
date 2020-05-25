import React from 'react';
import './Word.css';

const Word = ({word, guesses, theme, status, }) => {
  
  const letterList = word.split('');

  // const done = (arr, target) => target.every(v => arr.includes(v));
   
  // // if (done(guesses, letterList)) {
  // //   showDefinition();
  // // }

  return (
    <div className={(theme === 'light' ? 'word-box-light' : 'word-box-dark')} >
        <h1>{

            (status === 'over' ? word : letterList.map((letter, i) => {            
            if (guesses.includes(letter)) {
              return letter
            } else {
              return '_';
            }
          }))

          
        }</h1>
    </div>
  )
}

export default Word