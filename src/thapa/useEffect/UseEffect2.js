import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
  const [widthCount,setWidthCount]=useState(window.screen.width);
  const actulwidth =()=>{
    setWidthCount(window.innerWidth)
   // console.log(`i am width ${window.innerWidth}`)
  }
  useEffect(()=>{
    window.addEventListener("resize",actulwidth)

    return ()=>{
      window.removeEventListener("resize",actulwidth);
    }

  });
  return (
    <div>
      <p>The actual size of the window is:</p>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2