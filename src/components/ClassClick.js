import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler(){
    console.log('click me button')
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>CLick me</button>
      </div>
    )
  }
}

export default ClassClick