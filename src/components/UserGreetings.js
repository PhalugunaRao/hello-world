import React, { Component } from 'react'

 class UserGreetings extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false

    }
  }


  render() {
    if(this.state.isLoggedIn){
      return(
        <div>Welocme Geethu</div>
      )
    }else{
      return (
          <div>Welcome Guest</div>
       
      )

    }
  }
}

export default UserGreetings