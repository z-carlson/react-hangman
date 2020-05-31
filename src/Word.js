import React from 'react';
import './Word.css';

const Word = ({word, guesses, theme, status, difficulty}) => {
  
  const letterList = word.split('');

  const displayDifficulty = 'normal';

  
  return (
    <div className={(theme === 'light' ? 'word-box-light' : 'word-box-dark')} >
        <h1 className="display-word">{
            (status === 'over' ? word : letterList.map((letter, i) => {            
            if (guesses.includes(letter)) {
            return <p className={difficulty}>{letter}</p>
            } else {
              return <p>_</p>;
            }
          }))

          
        }</h1>
    </div>
  )
}

export default Word