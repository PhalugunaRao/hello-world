import React from 'react'
import { Outlet ,useSearchParams} from 'react-router-dom'

export const Users = () => {
  const [searchPaarams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchPaarams.get('filter') === 'active'
  return (
    <div>
      <h2>User1</h2>
      <h2>User2</h2>
      <h2>User3</h2>
      <Outlet/>
      <div>
        <button onClick={()=> setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers?(
          <h2>Showing active users</h2>
        ):(
          <h2>Showing all users</h2>
        )
      }

    </div>
  )
}
