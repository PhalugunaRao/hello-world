import React, { useState } from 'react'

const ShortCircuitEvu = () => {
  const[demo,setDemo]=useState("");
  return (
    <div>
      <h1>{demo||"technical"}</h1>
      <h1>{demo && "Geethu"}</h1>
    </div>
  )
}

export default ShortCircuitEvu