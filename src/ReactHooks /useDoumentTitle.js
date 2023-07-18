import React, { useEffect } from 'react'

function useDoumentTitle(count) {
 useEffect(() =>{
  document.title = `Count ${count}`

 },[count])
}

export default useDoumentTitle