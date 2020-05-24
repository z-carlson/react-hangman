import React from 'react';
import Letter from './Letter';
import './Letters.css'

const Letters = ({handleGuess, theme, status}) => {
  const vowels = ['A','E','I','O','U']

  const consonants = ['B','C','D','F','G','H','J',
                    'K','L','M','N','P','Q','R','S',
                    'T','V','W','X','Y','Z'
                    ]
                 

  return (
    <div className="alphabet-selection">
      <div className="consonant-rows">
      {
          consonants.map((consonant, i) => {
            return (
              <Letter letter={consonant}
              handleGuess={handleGuess}
              theme={theme}
              status={status}
              key={i}
              />
            )
          })
        }
      </div>
      
      <div className="vowel-row">
        {
          vowels.map((vowel, i) => {
            return (
              <Letter 
                letter={vowel}
                handleGuess={handleGuess}
                theme={theme}
                status={status}
                key={i}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Letters