import React, { Component } from 'react';
import './Letter.css';

const unselected = 'letter-box'
const selected = 'letter-box-clicked'


class Letter extends Component {
  constructor(props) {
    super(props);

      this.state = {
        status: unselected,
      }
  }

  handleClick = () => {
    this.props.handleGuess(this.props.letter.toLowerCase())
    this.setState({status: selected})
  }


  render() {
    return (
      <div className={this.state.status} onClick={() => 
            this.handleClick()
          } >
        <h3>{this.props.letter}</h3>
      </div>
    )
  }

}


// const Letter = ({letter, handleGuess}) => {


export default Letter