import React, { Component } from 'react';
import './App.css';
import Validation from './components/ValidationComponent';
import Char from './components/CharComponent';

class App extends Component {
  state = {
    textArray: []
  }
  inputChangedHandler = (event) => {
    this.setState({
      textArray: event.target.value.split('')
    });
  }
  deleteCharHandler =(charIndex) =>{
    const textArrayInState = [...this.state.textArray];
    textArrayInState.splice(charIndex,1);
    this.setState({textArray: textArrayInState});
  }

  render() {

    let chars = null;
    if (this.state.textArray.length > 0) {
      chars = (
        <div className="CharList">
          {this.state.textArray.map((char, index) => {
            return <Char 
            key={index}
            char={char}
            click={()=> this.deleteCharHandler(index)}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.textArray.join('')}></input>
        <p>{this.state.textArray.length}</p>
        <Validation inputLen={this.state.textArray.length} />
        {chars}
      </div>
    )
  }
}

export default App;
