import React, { Component } from 'react'

 class UserGreetings extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false

    }
  }


  render() {

    return this.state.isLoggedIn && <div>Welcome Geethu</div>

    //Terneray operator
    // return(
    //   this.state.isLoggedIn ? (
    //   <div>Welcome Geethu</div>
    //   ) : ( 
    //   <div>Welcome Guest</div>
    //   )
     
    // )

    //Variable conditional

    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Geethu</div>
    // }else{
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>



    //if else
    // if(this.state.isLoggedIn){
    //   return(
    //     <div>Welocme Geethu</div>
    //   )
    // }else{
    //   return (
    //       <div>Welcome Guest</div>
       
    //   )

    // }
  }
}

export default UserGreetings