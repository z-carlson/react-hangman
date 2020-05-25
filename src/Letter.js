import React, { Component } from 'react';
import './Letter.css';



class Letter extends Component {
  constructor(props) {
    super(props);     
      this.unClicked = (this.props.theme === 'light' ? 'letter-box-light' : 'letter-box-dark')
      this.clicked = (this.props.theme === 'light' ? 'letter-box-clicked-light' : 'letter-box-clicked-dark')

      this.state = {
        buttonState: this.unClicked,
      }
  }

  
  
  handleClick = () => {
    this.props.handleGuess(this.props.letter.toLowerCase());
    this.setState(({buttonState: this.clicked}));
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