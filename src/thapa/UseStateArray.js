import React, { useState } from 'react'

 const UseStateArray = () => {
  const bioData = [
    {
      id:0,myName:"Vinod",age:26
    }
    ,  {
      id:1,myName:"Geethu",age:6
    }
  ]
  const [myArray,setmyArray] = useState(bioData)

  const clearArry = () => {
    setmyArray([]);

  }
  return (
    <>
    {
      myArray.map((curElm)=>{
        return <h1 key={curElm.id}>Name:{curElm.myName}& Age:{curElm.age}</h1>
      })
    }
    <button className='btn' onClick={clearArry}>Clear</button>
    

    </>
  )
}
export default UseStateArray

