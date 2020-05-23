import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Word from './Word';
import Letters from './Letters';
import Definition from './Definition';
import Settings from './Settings';

const initialState = {
    view: "game",
    status: '',
    word: 'duckboard',
    guesses: [],
    wrongGuesses: 0,
    }



class App extends Component {
  constructor() {
    super();
      this.state = initialState;
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



  render() {
    return (
        <div>
          <nav>
            <h1>React Hangman</h1>
            <div><img src={require("./settings.svg")} alt={"settings"} width={"40px;"}/> </div>
          </nav>
            { 
              this.state.view === 'game'
                ? <div>                 
                  <main className="container">
                    <Counter count={this.state.wrongGuesses} />
                    <Word word={this.state.word} guesses={this.state.guesses} />
                    {this.state.status === 'over' 
                     ? <Definition />
                     : <p></p> 
                    }               
                    <Letters handleGuess={this.handleGuess} />
                  </main>
                  <footer>
                    <p>new word</p>
                  </footer>
                  </div>
                : <div>
                    <Settings />
                  </div>
            } 
        </div>


    )
  }

}


export default App;
