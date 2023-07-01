import React from "react";

// 
//jsx

//const Hello = () => {
//   return(
//     <div>
//       <h1>Hello Geethu</h1>
//     </div>
//   )

// }


const Hello = () => {
  return React.createElement('div',
  {id:'hello', className:'dummyClass'},
  React.createElement('h1',null,'Hello Geethu React'))
}
export default Hello