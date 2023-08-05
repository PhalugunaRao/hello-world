import React from 'react'
import { useState } from 'react'

function MyButton() {
  const [count,setCount] = useState(0);

  function handleCLick(){
    setCount(count+1)

  }
  return (
    <button onClick={handleCLick}>Clicked {count} times</button>
  )
}

export default MyButton