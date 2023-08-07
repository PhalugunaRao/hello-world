import React, { useState } from 'react'

function RulesHooks() {
  const [myName,setMyName] = useState('Phalguna')
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  )
}

export default RulesHooks