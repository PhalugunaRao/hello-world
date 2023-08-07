import React, { useState } from 'react'

const UseStateObject = () => {
  const [myObject,setMyObject] = useState({
    myName:"Geethu",myAge:6,degree:"LKG"
  });

  const chnageObject =()=>{
    setMyObject({...myObject, myName:"PHALU"})

  }
  return (
    <div>
      <h1>Name:{myObject.myName} & Age:{myObject.myAge} & {myObject.degree}</h1>
      <button onClick={chnageObject}>Update</button>
    </div>
  )
}

export default UseStateObject