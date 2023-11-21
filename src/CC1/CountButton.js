import React, { Component } from 'react'

export default class CountButton extends Component {
  
  state = {
    count:0,
  };
  increment =() =>{
    this.setState({count :this.state.count +1});
  }
  decrement =() =>{
    this.setState({count:this.state.count -1});
  }
  
  render() {
    return (
      <div>
        <h3 align='center'>Count : {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
      
    )
  }
}
