import React from 'react';
import './Word.css';

const Word = ({word, guesses}) => {
  
  const letterList = word.split('');

  return (
    <div className="word-box">
        <h1>{
          letterList.map((letter, i) => {
            console.log(guesses);
            
            if (guesses.includes(letter)) {
              return letter
            } else {
              return '_';
            }
          })
        }</h1>
    </div>
  )
}

export default Word