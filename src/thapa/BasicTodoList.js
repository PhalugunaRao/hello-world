import React, { useState } from 'react'

const BasicTodoList = () => {

  const myBioData =[
    {
    myName:'Geethu',age:6,classId:1
  },
  {
    myName:'Phalu',age:36,classId:2
  },
]

const [myArray,setmyArray] = useState(myBioData);

const clearArry=()=>{
  setmyArray([]);

};
const removeElem = (classId) =>{
  
  const myNewArray = myArray.filter((curElm) => {
    console.log(`${classId}====${curElm.classId}`)
    return curElm.classId != classId

  })
  setmyArray(myNewArray)

}
  return (
   <>
   {
    myArray.map((curElm)=>{
    return (
      <h1 key={curElm.classId}>Name:{curElm.myName} & Age: {curElm.age}
      <button onClick={()=> removeElem(curElm.classId)}>Remove</button>
      </h1>

    ) 

    })
   }
   <button onClick={clearArry}>Clear</button>
   </>
  )
}

export default BasicTodoList