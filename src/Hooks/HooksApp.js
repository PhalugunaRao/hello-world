import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

function HooksApp() {
  const[windowWidth,setwindowWidth] = useState(window.innerWidth)

  const handleResize = () =>{
    setwindowWidth(window.innerWidth)
  }

  useEffect(() =>{
    window.addEventListener('resize',handleResize)

  },[])

  return(
    <div>
      {windowWidth}

    </div>
  )
  // const [resourceType,setResourceType] = useState('posts')
  // const [items,setItems] = useState([])
  // useEffect(() =>{
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //   .then(response => response.json())
  //   .then(json => setItems(json))
  // },[resourceType])
  
  // const [count,setCount] = useState(() =>{
  //   console.log('run function')
  //   return 4
  // })
  // const [theme,setTheme] = useState('blue')

  // function decrementCount(){
  //   setCount(prevCount=> prevCount-1)
  // }
  // function incrementCount(){
  //   setCount(prevCount=>prevCount+1)

  // }
  // return (
  //   <>
  //   <div>
  //     <button onClick={()=>setResourceType('posts')}>Posts</button>
  //     <button onClick={() => setResourceType('users')}>Users</button>
  //     <button onClick={()=>setResourceType('comments')}>Comments</button>
  //   </div>
  //   <h1>{resourceType}</h1>
  //   {
  //     items.map(items =>{
  //       return <pre>{JSON.stringify(items)}</pre>
  //     })
  //   }
  //   {/* <button onClick={decrementCount}>-</button>
  //   <span>{count}</span>
  //   <span>{theme}</span>
  //   <button onClick={incrementCount}>+</button> */}
  //   </>
    
  // )
}

export default HooksApp