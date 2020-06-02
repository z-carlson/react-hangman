import React from 'react';
import Letter from './Letter';
import './Letters.css'
import './Letter.css';


const Letters = ({handleGuess, theme, status, guesses}) => {
  const vowels = ['A','E','I','O','U']

  const consonants = ['B','C','D','F','G','H','J',
                    'K','L','M','N','P','Q','R','S',
                    'T','V','W','X','Y','Z'
                    ]
                 
  const unclicked = (theme === 'light') ? 'letter-box-light' : 'letter-box-dark'  
  const clicked = (theme === 'light') ? 'letter-box-clicked-light' : 'letter-box-clicked-dark'

  return (
    <div className="alphabet-selection">
      <div className="consonant-rows">
      {
          consonants.map((consonant, i) => {
            if (guesses.includes(consonant.toLowerCase())) {
              return (
                <Letter 
                  letter={consonant}
                  handleGuess={handleGuess}
                  key={i}
                  display={clicked}
                  canClick={false} />
              )    
            } else {
              return (
               <Letter 
                letter={consonant}
                handleGuess={handleGuess}
                key={i} 
                display={unclicked}
                canClick={true}/> 
              )
            }
          })          
          }
      </div>  
      <div className="vowel-row">
        {
          vowels.map((vowel, i) => {
            if (guesses.includes(vowel.toLowerCase())) {
              return (
                <Letter 
                letter={vowel}
                handleGuess={handleGuess}
                key={i}
                display={clicked}
                canClick={false}
              />
              )
            } else {
              return (
                <Letter 
                letter={vowel}
                handleGuess={handleGuess}
                key={i}
                display={unclicked}
                canClick={true}
              />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Letters