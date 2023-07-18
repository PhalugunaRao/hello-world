import React, { useState } from 'react'
import useDoumentTitle from './useDoumentTitle'

function DocTitleOne() {
  const [count,setcount] = useState(0)
 useDoumentTitle(count)
  
  return (
    <div>
      <button onClick={() => setcount(count +1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne