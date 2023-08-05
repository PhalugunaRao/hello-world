import React from 'react'

function PassButton({count,onClick}) {
  return (
    
    <button onClick={onClick}>
      Clicked {count} times
      </button>
  )
}

export default PassButton