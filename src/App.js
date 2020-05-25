import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Word from './Word';
import Letters from './Letters';
import Definitions from './Definition';
import Settings from './Settings';
import secrets from './secrets.js';
import { wordList } from './wordList.js';

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
        word: '',
        guesses: [],
        wrongGuesses: 0,
        theme: 'light',
        definitions: {}
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

  getWord = () => {

    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);

    this.setState({
        view: "game",
        status: '',
        word: randomWord,
        guesses: [],
        wrongGuesses: 0,
        });

    var myHeaders = new Headers();
      myHeaders.append("Authorization", secrets.api_token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch(`https://owlbot.info/api/v4/dictionary/${randomWord}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({definitions: result});
    }).then(result => console.log(this.state.definitions.definitions[0].type))
    .catch(error => console.log('error', error));

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
                      />
                    {this.state.status === 'over' 
                     ? <Definitions definitions={this.state.definitions}/>
                     : <p></p> 
                    }               
                    <Letters theme={this.state.theme} status={this.state.status} handleGuess={this.handleGuess} />
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
