import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Word from './Word';
import Letters from './Letters';
import Definition from './Definition';
import Settings from './Settings';
import secrets from './secrets.js';

const wordList = [
  {
    word: 'cake',
    definition: 'A rich, sweet dessert food, typically made of flour, sugar and eggs and baked in an oven, and often covered in icing.',
    partOfSpeech: 'noun'
  },
  {
    word: 'beautiful',
    definition: 'Attractive and possessing beauty.',
    partOfSpeech: 'Adjective'
  },
  {
    word: 'candle',
    definition: 'A light source consisting of a wick embedded in a solid, flammable substance such as wax, tallow, or paraffin.',
    partOfSpeech: 'noun'
  },
]


// const initialState = {
//     view: "game",
//     status: '',
//     word: 'duckboard',
//     guesses: [],
//     wrongGuesses: 0,
//     }



class App extends Component {
  constructor() {
    super();
      this.state = {
        view: "game",
        status: '',
        word: 'duckboard',
        guesses: [],
        wrongGuesses: 0,
        theme: 'light'
        };
  }

  checkGameOver = (guesses) => {
    if (guesses === 6 ) {
      this.setState({status: 'over'});
    }
  }

  handleGuess = (letter) => {
    let currentGuesses = this.state.guesses;
    currentGuesses.push(letter)
    
    const currentWrong = (this.state.word.includes(letter)) 
      ? this.state.wrongGuesses
      : this.state.wrongGuesses + 1;
               
    this.setState({guesses: currentGuesses});

    this.checkGameOver(currentWrong);

    if (currentWrong < 7) {
      this.setState({wrongGuesses: currentWrong});
    }
  }
  
  toggleSettingsView = () => {
    const currentView = this.state.view;

    if (currentView === "game") {
      this.setState({view: 'settings'});
    } else {
      this.setState({view: 'game'});
    }
  }

  toggleThemeChange = () => {
    if (this.state.theme === 'light') {
      this.setState({theme: 'dark'})
    } else {
      this.setState({theme: 'light'})
    }
  }

  // showDefinition = () => {
  //   this.setState({status: 'over'})
  // }

  getWord = () => {

    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);

    this.setState({
        view: "game",
        status: '',
        word: randomWord.word,
        guesses: [],
        wrongGuesses: 0,
        });

    // var myHeaders = new Headers();
    //   myHeaders.append("app_id", '2bb3169f');
    //   myHeaders.append("app_key", '0acde3d5d9d3e414fb57d32777748abd');

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   mode: 'no-cors',
    //   redirect: 'follow'
    // };

    // fetch("https://od-api.oxforddictionaries.com/api/v2/entries/en-us/example", {
    //   method: 'GET',
    //   headers: {
    //     "app_id": "2bb3169f",
    //     "app_key": "0acde3d5d9d3e414fb57d32777748abd"
    //   },
    //   mode: 'no-cors',
    // })
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // }
  }

  render() {
    return (
        <div className={(this.state.theme === 'light' ? 'light-mode': 'dark-mode')} >
          <nav>
            <h1>React Hangman</h1>
            <div onClick={this.toggleSettingsView}>
              <img id={(this.state.theme === 'light' ? 'settings-icon-light' : 'settings-icon-dark')} 
                    src={require("./settings.svg")} 
                    alt={"settings"} 
                    width={"40px;"}/> </div>
          </nav>
            { 
              this.state.view === 'game'
                ? <div>                 
                  <main className="container">
                    <Counter theme={this.state.theme} count={this.state.wrongGuesses} />
                    <Word 
                      theme={this.state.theme} 
                      word={this.state.word} 
                      status={this.state.status} 
                      guesses={this.state.guesses}
                      // showDefinition={this.showDefinition} 
                      />
                    {this.state.status === 'over' 
                     ? <Definition />
                     : <p></p> 
                    }               
                    <Letters theme={this.state.theme} status={this.state.status} handleGuess={this.handleGuess} />
                  </main>
                  <footer>
                    <button onClick={this.getWord} >New Word</button>
                  </footer>
                  </div>
                : <div>
                    <Settings theme={this.state.theme} toggleThemeChange={this.toggleThemeChange} />
                  </div>
            } 
        </div>
    )
  }
}


export default App;
