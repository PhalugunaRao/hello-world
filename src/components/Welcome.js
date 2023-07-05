import React, {Component} from 'react'

//props
// class Welocme extends Component {
//   render(){
//     return( 
//       <div>
//         <h1>Welcome {this.props.name} a.k.a  {this.props.heroName}</h1>
//         {this.props.children}
//       </div>
   
//     )
//   }

// }

//Destructing props in class
class Welocme extends Component {
  render(){
    const {name,heroName} = this.props
    return( 
      <div>
        <h1>Welcome {name} a.k.a  {heroName}</h1>
        {this.props.children}
      </div>
   
    )
  }

}

export default Welocme