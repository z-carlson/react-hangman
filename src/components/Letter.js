import React, { Component } from 'react';
import './Letter.css';



class Letter extends Component {
  constructor(props) {
    super(props);
      this.handleClick = this.handleClick.bind(this);
      
  }

  handleClick = () => {
    this.setState({canClick: false})
    this.props.handleGuess(this.props.letter.toLowerCase())
  }

  render() {
    return (
      <button 
        onClick={this.handleClick}
        disabled={!this.props.canClick}
        className={this.props.display}>{this.props.letter}
        </button>
    )
  }
}




export default Letter