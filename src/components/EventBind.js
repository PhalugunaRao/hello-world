import React, { Component } from 'react'

 class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }

    //this.clickHandler = this.clickHandler.bind(this)
  }
  // clickHandler(){
  //   this.setState({
  //     message:'Good bay'
  //   })
  //   console.log(this)
  // }

  clickHandler = ()=>{
    this.setState({
      message:'Good boy'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>


        {/* using bind 
        <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* //Arrow function
        <button onClick={ () => this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>



      </div>
    )
  }
}

export default EventBind