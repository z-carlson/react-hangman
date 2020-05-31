import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Word from './Word';
import Letters from './Letters';
import Definitions from './Definition';
import Settings from './Settings';
import secrets from './secrets.js';
import { wordList } from './wordList.js';


function DisplayResult({result}) {
  if (result === 'fail') {
    return <h2 className="failure">You failed</h2>;
  } else if (result === 'success') {
    return <h2 className="success">You did it!</h2>;
  } else {
    return <p></p>;
  }
}

class App extends Component {
  constructor() {
    super();
      this.state = {
        score: {
          won: 0,
          total: 0,
        },
        streak: 0,
        view: "game",
        gotIt: '',
        status: '',
        word: 'fun',
        guesses: [],
        wrongGuesses: 0,
        theme: 'light',
        definitions: {
          definitions: [{
            type: 'noun',
            definition: 'hangman!',
            example: "I'm having so much fun!"
          }]
        },
        isPending: true
        };
  }

  checkGameOver = (wrongGuesses) => {
    if (wrongGuesses === 6 ) {
      this.setState({
        status: 'over', 
        gotIt: 'fail', 
        score: {
          won: this.state.score.won, 
          total: this.state.score.total + 1
        },
        streak: 0, 
        });
    }

    let wordLetters = this.state.word.split('');
    let guessList = this.state.guesses;
  
    const correctGuesses = [];

    for (let letter of wordLetters) {
      if (guessList.includes(letter)) {
        correctGuesses.push(letter);
      }
    }

    function wasGuessed(element, index, array) {
      return correctGuesses.includes(element);
    }

    if (wordLetters.every(wasGuessed)) {
      this.setState({
        status: 'over', 
        gotIt: 'success',
        score: {
          won: this.state.score.won + 1, 
          total: this.state.score.total + 1},
        streak: this.state.streak + 1, 
      });
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

  getDefinition = (word) => {
    
    var myHeaders = new Headers();
      myHeaders.append("Authorization", secrets.api_token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    this.setState({isPending: true});

    fetch(`https://owlbot.info/api/v4/dictionary/${word}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({definitions: result, isPending: false});
    }).then(result => console.log(this.state.definitions.definitions[0].type))
    .catch(error => console.log('error', error));
  }

  getWord = () => {

    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);

    this.setState({
        view: "game",
        status: '',
        word: randomWord,
        guesses: [],
        wrongGuesses: 0,
        gotIt: '',
        });

    this.getDefinition(randomWord);

    };


  render() {
    return (
        <div className={(this.state.theme === 'light' ? 'light-mode': 'dark-mode')} >
          <nav>
            <h1>React Hangman</h1>
            <div onClick={this.toggleSettingsView}>
              <img id={(this.state.theme === 'light' ? 'settings-icon-light' : 'settings-icon-dark')} 
                    src={require("./settings.svg")} 
                    alt={"settings"} 
                    width={"40px;"}/> 
            </div>
          </nav>

            { 
              this.state.view === 'game'
                ? <div>                 
                  <main className="container">
                  <div className={this.state.theme === 'light' ? "scoreboard-light" : "scoreboard-dark"}>
                    <div className="total-score">
                      <h4>SCORE</h4>
                      <p>{this.state.score.won} / {this.state.score.total}</p>
                    </div>
                    <div className="current-streak">
                      <h4>STREAK</h4>
                      <p> {this.state.streak}</p>
                    </div>
                  </div>
                    <Counter theme={this.state.theme} count={this.state.wrongGuesses} />
                    <Word 
                      theme={this.state.theme} 
                      word={this.state.word} 
                      status={this.state.status} 
                      guesses={this.state.guesses}
                      />
                    <DisplayResult result={this.state.gotIt}/>
                    { (this.state.status === 'over')
                     ? (this.state.pending)
                       ? <p>Loading Definition</p>
                       : <Definitions definitions={this.state.definitions} />  
                      : <p></p>
                    }       
                    <Letters 
                      theme={this.state.theme} 
                      status={this.state.status} 
                      handleGuess={this.handleGuess} 
                      guesses={this.state.guesses}
                      />
                  </main>
                  <footer>
                    <button onClick={this.getWord} id={(this.state.theme === 'light' ? "button-light" : "button-dark")}>New Word</button>
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
