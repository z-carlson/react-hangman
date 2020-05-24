import React, { Component } from 'react';
import './Letter.css';



class Letter extends Component {
  constructor(props) {
    super(props);
      this.state = {
        buttonState: (this.props.theme === 'light' ? 'letter-box-light' : 'letter-box-dark'),
      }      
  }

  
  handleClick = () => {
    this.props.handleGuess(this.props.letter.toLowerCase());
    this.setState((this.props.theme === 'light' ? {buttonState: 'letter-box-clicked-light'} : {buttonState: 'letter-box-clicked-dark'} ));
    }


  render() {  
    return (
      <div className={this.state.buttonState} onClick={() => this.handleClick() } >
        <h3>{this.props.letter}</h3>
      </div>
    )
  }

}




export default Letter